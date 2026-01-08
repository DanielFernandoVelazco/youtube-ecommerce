import { usersSeeds } from "src/seeds/users/mock-seeds.users";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/users/entities/user.entity";

@Injectable()
export class UserSeed {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async seedUser() {
        const existingUserName = (await this.userRepository.find()).map(
            (user) => user.name,
        )

        for (const userData of usersSeeds) {
            if (!existingUserName.includes(userData.name)) {

                const user = new User();

                user.id = userData.id;
                user.name = userData.name;
                user.email = userData.email;
                user.password = userData.password;
                user.phone = userData.phone;
                user.country = userData.country;
                user.city = userData.city;

                await this.userRepository.save(user);
            }
        }
    }
}