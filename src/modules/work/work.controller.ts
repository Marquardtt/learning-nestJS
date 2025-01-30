import { Body, Controller, Get, Param, Post, ValidationPipe } from "@nestjs/common";
import { WorkService } from "./work.service";
import { Work } from "./entity/work";

@Controller("/work")
export class WorkController {
    public workService: WorkService = new WorkService()

    @Post("/create")
    public async createWork(@Body(ValidationPipe) work: Work): Promise<object> {
        return this.workService.createWork(work);
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