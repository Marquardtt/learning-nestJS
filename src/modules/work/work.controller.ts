import { Body, Controller, Delete, Get, Param, Post, ValidationPipe } from "@nestjs/common";
import { WorkService } from "./work.service";
import { Work } from "./entity/work.entity";
import { CreateWorkDTO } from "./dto/create-work.dto";

@Controller("/work")
export class WorkController {
    constructor(private readonly workService: WorkService) { }

    @Post("/create")
    public async createWork(@Body(ValidationPipe) work: CreateWorkDTO): Promise<object> {
        return this.workService.createWork(work);
    }

    @Delete("/delete/:id")
    public async deleteWork(@Param('id') id: number): Promise<object> {
        return this.workService.deleteWork(id);
    }

    @Get("/find/:id")
    public async findOne(@Param('id') id: number): Promise<Work> {
        return this.workService.findOne(id);
    }

    @Get("/all")
    public async findAll(): Promise<Work[]> {
        return this.workService.findAll();
    }
}