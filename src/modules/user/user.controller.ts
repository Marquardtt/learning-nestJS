import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller("/user")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post("/create")
  public async createUser(@Body(ValidationPipe) userDto: CreateUserDTO): Promise<object> {
    return this.userService.createUser(userDto);
  }

  @Patch("/update/:id")
  public async updateUser(@Param('id') id: number, @Body(ValidationPipe) userDto: Partial<CreateUserDTO>): Promise<object> {
    return this.userService.updateUser(id, userDto);
  }

  @Delete("/delete/:id")
  public async DeleteUserDTO(@Param('id') id: number): Promise<object> {
    return this.userService.deleteUser(id);
  }

  @Get("/find/:id")
  public async findOne(@Param('id') id: number): Promise<object> {
    return this.userService.findOne(id);
  }

  @Get("/all")
  public async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

}