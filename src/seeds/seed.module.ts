import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { UserSeed } from "./users/module-seeds.users";
import { ProductSeed } from "./products/module-seeds.products";
import { Product } from "src/products/entities/product.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User, Product])],
    providers: [UserSeed, ProductSeed],
    exports: [UserSeed, ProductSeed],
})

export class SeedModule { }