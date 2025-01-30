import { Module } from "@nestjs/common";
import { WorkController } from "./work.controller";
import { WorkService } from "./work.service";

@Module({
    imports: [],
    controllers: [WorkController],
    providers: [WorkService],
    exports: [WorkService]
})

export class WorkModule { }