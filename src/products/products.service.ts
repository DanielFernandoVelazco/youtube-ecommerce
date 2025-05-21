import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductResponseDto } from './dto/response-product.dto';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) { }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return await this.productRepository.save(createProductDto);
  }

  async findAll(): Promise<ProductResponseDto[]> {
    return await this.productRepository.find();
  }

  async findOne(id: string): Promise<ProductResponseDto | null> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) return null;
    return new ProductResponseDto(product as Partial<ProductResponseDto>);
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<ProductResponseDto> {
    await this.productRepository.update(id, updateProductDto);
    return this.productRepository.findOneBy({ id })
  }

  async remove(id: string) {
    return await this.productRepository.delete(id);
  }
}