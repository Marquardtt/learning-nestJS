import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { createUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {

  private users: User[] = []
  
  createUser(userDTO: createUserDTO): object {
    let randomId = Math.floor(Math.random() * 1000)
    
    while(this.users.find(user => user.id === randomId)) {
        randomId = Math.floor(Math.random() * 1000)
    }
    
    const newUser:User = {id: randomId, name: userDTO.name, age: userDTO.age}

    this.users.push(newUser)
    
    return {message: "Usuário criado com sucesso", user: newUser}
  }
  
  findOne(id: number): object {
    const user = this.users.find(user => user.id === id)
    if(user !== undefined){
      return {message: "Usuario encontrado", user: user}
    }else{
      return {message: "Nenhum usuário encontrado para o ID fornecido"}
    }
  }

  findAll(): User[] {
    return this.users;
  }

}
