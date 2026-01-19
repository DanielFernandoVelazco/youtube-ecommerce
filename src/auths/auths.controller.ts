import { Controller, Post, Body, Get, Headers, UseGuards, Param, Patch, Delete } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { SimpleAuthGuard } from './guards/simple-auth.guard';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) { }

  @Post('login')
  async login(@Body() createAuthDto: CreateAuthDto): Promise<LoginResponseDto> {
    return this.authsService.login(createAuthDto);
  }

  @Get('validate')
  @UseGuards(SimpleAuthGuard)
  async validate(@Headers('authorization') authHeader: string) {
    const token = authHeader?.replace('Bearer ', '');
    const validation = await this.authsService.validateToken(token);

    return {
      valid: !!validation,
      user: validation
    };
  }

  // Métodos CRUD originales (si los necesitas)
  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authsService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.authsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authsService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authsService.remove(+id);
  }
}