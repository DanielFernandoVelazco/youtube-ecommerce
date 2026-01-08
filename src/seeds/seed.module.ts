import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { UserSeed } from "./users/module-seeds.users";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserSeed],
    exports: [UserSeed]
})

export class SeedModule { }