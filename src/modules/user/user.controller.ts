import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { createUserDTO } from './dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/createUser")
  async createUser(@Body(ValidationPipe) userDto: createUserDTO): Promise<object> {
    return this.userService.createUser(userDto);
  }

  @Put("/updateUser/:id")
  async updateUser(@Param('id')id: number, @Body(ValidationPipe) userDto: createUserDTO): Promise<object> {
    return this.userService.updateUser(id, userDto);
  }
  
  @Delete("/deleteUser/:id")
  async DeleteUserDTO(@Param('id')id: number): Promise<object> {
    return this.userService.deleteUser(id);
  }

  @Get("/findOne/:id")
  async findOne(@Param('id')id: number): Promise<object> {
    return this.userService.findOne(id);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }


}