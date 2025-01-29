import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { createUserDTO } from './dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/createUser")
  createUser(@Body() userDto: createUserDTO): object {
    return this.userService.createUser(userDto);
  }
  
  @Get("/findOne/:id")
  findOne(@Param('id') id: number): object {
    return this.userService.findOne(Number(id));
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

}