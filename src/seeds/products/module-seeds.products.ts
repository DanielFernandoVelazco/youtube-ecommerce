import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/products/entities/product.entity";
import { Repository } from "typeorm";
import { productsSeeds } from "./mock-seeds.products";
import { User } from "src/users/entities/user.entity";

@Injectable()
export class ProductSeed {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async seedProduct() {
        const existingProductName = (await this.productRepository.find()).map(
            (product) => product.name,
        )

        for (const productData of productsSeeds) {
            if (!existingProductName.includes(productData.name)) {

                const product = new Product();
                const user = await this.userRepository.findOneBy({ id: productData.user });

                product.id = productData.id;
                product.name = productData.name;
                product.description = productData.description;
                product.price = productData.price;
                product.stock = productData.stock;
                product.imgUrl = productData.imgUrl;
                product.user = user;

                await this.productRepository.save(product);
            }
        }
    }
}