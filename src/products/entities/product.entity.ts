import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        type: "varchar",
        length: 100,
        unique: true,
        nullable: false
    })
    name: string

    @Column({
        type: "varchar",
        length: 200,
        nullable: false
    })
    description: string

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: false
    })
    price: number

    @Column({
        type: "int",
        nullable: false
    })
    stock: number

    @Column({
        type: "varchar",
        length: 200,
        nullable: false
    })
    imgUrl: string

    @ManyToOne(() => User, (user) => user.products)
    user: User;
}
