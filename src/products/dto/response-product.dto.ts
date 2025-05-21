export class ProductResponseDto {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;

    constructor(partial: Partial<ProductResponseDto>) {
        const { id, name, description, price, stock, imgUrl } = partial;
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.imgUrl = imgUrl;
    }
}