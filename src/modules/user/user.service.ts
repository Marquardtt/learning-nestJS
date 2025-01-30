import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { createUserDTO } from './dto/create-user.dto';
import { updateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UserService {

  // sem implementação de bd por enquanto, por isso os dados estão sendo salvos em memória
  private users: User[] = []
  private nextId = 1

  createUser(userDTO: createUserDTO): object {
    if (this.users.some(user => user.email === userDTO.email)) {
      throw new HttpException("Email já cadastrado", HttpStatus.BAD_REQUEST)
    }

    const newUser = new User(this.nextId++, userDTO.email, userDTO.password, userDTO.name, userDTO.age)
    this.users.push(newUser)
    return { message: "Usuário criado com sucesso", user: newUser }
  }

  updateUser(id: number, userDTO: updateUserDTO): object{
    const userToUpdate = this.users.find(user => user.id == id)
    
    if(userToUpdate == undefined){
      throw new HttpException("Usuário não encontrado", HttpStatus.NOT_FOUND)
    }
    const updatedUser = { ...userToUpdate, ...userDTO }
    this.users = this.users.map(user => user.id == id ? updatedUser : user)
    return { message: "Usuário atualizado com sucesso", user: updatedUser }
  }

  deleteUser(id: number): object{
    const userToDelete = this.users.find(user => user.id == id)
    console.log(userToDelete)
    if(userToDelete == undefined){
      throw new HttpException("Usuário não encontrado", HttpStatus.NOT_FOUND)
    }

    this.users = this.users.slice(this.users.indexOf(userToDelete), 1)
    return { message: "Usuário deletado com sucesso", user: userToDelete }
  }

  findOne(id: number): object {
    const user = this.users.find(user => user.id == id)
    console.log(user)
    if (user == undefined) {
      throw new HttpException("Usuario não encontrado", HttpStatus.NOT_FOUND)
    }
    return { message: "Usuario encontrado", user: user }
  }

  findAll(): User[] {
    return this.users;
  }

}
