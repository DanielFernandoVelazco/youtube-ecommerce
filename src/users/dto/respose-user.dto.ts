export class UserResponseDto {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    country: string;
    city: string;

    constructor(partial: Partial<UserResponseDto>) {
        const { id, name, email, password, phone, country, city } = partial;
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.country = country;
        this.city = city;
    }
}