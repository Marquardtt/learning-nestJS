import { Body, Get, Module, Post, ValidationPipe } from "@nestjs/common";
import { WorkController } from "./work.controller";
import { WorkService } from "./work.service";
import { Work } from "./entity/work";

@Module({
    imports: [],
    controllers: [WorkController],
    providers: [WorkService],
    exports: [WorkService]
})

export class WorkModule { }