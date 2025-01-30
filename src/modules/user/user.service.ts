import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UserService {

  // sem implementação de bd por enquanto, por isso os dados estão sendo salvos em memória
  private users: User[] = []
  private nextId = 1

  public async createUser(userDTO: CreateUserDTO): Promise<object> {
    if (this.users.some(user => user.email === userDTO.email)) {
      throw new HttpException("Email já cadastrado", HttpStatus.BAD_REQUEST)
    }

    const newUser = new User(this.nextId++, userDTO.email, userDTO.password, userDTO.name, userDTO.age)
    this.users.push(newUser)
    return { message: "Usuário criado com sucesso", user: newUser }
  }

  public async updateUser(id: number, userDTO: UpdateUserDTO): Promise<object> {
    const userToUpdate = this.users.find(user => user.id == id)

    if (userToUpdate == undefined) {
      throw new HttpException("Usuário não encontrado", HttpStatus.NOT_FOUND)
    }
    const updatedUser = { ...userToUpdate, ...userDTO }
    this.users = this.users.map(user => user.id == id ? updatedUser : user)
    return { message: "Usuário atualizado com sucesso", user: updatedUser }
  }

  public async deleteUser(id: number): Promise<object> {
    const userToDelete = this.users.find(user => user.id == id)
    if (userToDelete == undefined) {
      throw new HttpException("Usuário não encontrado", HttpStatus.NOT_FOUND)
    }
    this.users.splice(this.users.indexOf(userToDelete), 1)
    return { message: "Usuário deletado com sucesso", user: userToDelete }
  }

  public async findOne(id: number): Promise<object> {
    const user = this.users.find(user => user.id == id)
    if (user == undefined) {
      throw new HttpException("Usuario não encontrado", HttpStatus.NOT_FOUND)
    }
    return { message: "Usuario encontrado", user: user }
  }

  public async findAll(): Promise<User[]> {
    return this.users;
  }

}
