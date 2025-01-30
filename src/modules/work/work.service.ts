import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Work } from "./entity/work.entity";
import { CreateWorkDTO } from "./dto/create-work.dto";

@Injectable()
export class WorkService {

    public works: Work[] = []
    public nextId = 1

    public async createWork(work: CreateWorkDTO): Promise<object> {
        const newWork = new Work(this.nextId++, work.name, work.salary);
        this.works.push(newWork)
        return { message: "Novo trabalho criado", work: newWork };
    }

    public async deleteWork(id: number): Promise<object> {
        const workToDelete = this.works.find(work => work.id == id)
        if (workToDelete == undefined) {
            throw new HttpException("Trabalho não encontrado", HttpStatus.NOT_FOUND)
        }
        this.works.splice(this.works.indexOf(workToDelete), 1)
        return { message: "Trabalho deletado com sucesso", work: workToDelete }
    }

    public async findAll(): Promise<Work[]> {
        return this.works;
    }

    public async findOne(id: number): Promise<Work> {
        const work = this.works.find(work => work.id == id)
        if (work == undefined) {
            throw new HttpException("Trabalho não encontrado", HttpStatus.NOT_FOUND)
        }
        return work;
    }
}