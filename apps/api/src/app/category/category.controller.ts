import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Role } from '../auth/role/role.enum';
import { Roles } from '../auth/role/roles.decorator';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = new Category();
    category.name = createCategoryDto.name;
    return this.categoryService.create(category);
  }
}
