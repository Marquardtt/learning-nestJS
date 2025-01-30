import { Injectable } from "@nestjs/common";
import { Work } from "./entity/work";

@Injectable()
export class WorkService {

    public works: Work[] = []
    public nextId = 1

    public async createWork(work: Work): Promise<object> {
        const newWork = new Work(this.nextId++, work.name, work.salary);
        this.works.push(newWork)
        return { message: "Novo trabalho criado", work: newWork };
    }

    public async findAll(): Promise<Work[]> {
        return this.works;
    }

    public async findOne(id: number): Promise<Work> {
        const work = this.works.find(work => work.id == id)
        if (work == undefined) {
            throw new Error("Trabalho não encontrado")
        }
        return work;
    }
}