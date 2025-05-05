import { Product } from "src/products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        type: "varchar",
        length: 100,
        unique: true,
        nullable: false
    })
    name: string;

    @Column({
        type: "varchar",
        length: 100,
        unique: true,
        nullable: false
    })
    email: string;

    @Column({
        type: "varchar",
        length: 100,
        unique: true,
        nullable: false,
        select: false
    })
    password: string;

    @Column({
        type: "varchar",
        length: 100,
        unique: true,
        nullable: false
    })
    phone: string;

    @Column({
        type: "varchar",
        length: 100,
        nullable: false
    })
    country: string;

    @Column({
        type: "varchar",
        length: 100,
        nullable: false
    })
    city: string;

    @OneToMany(() => Product, (product) => product.user)
    products: Product[];
}
