import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user/user.module";
import { WorkModule } from "./modules/work/work.module";

@Module({
    imports: [UserModule, WorkModule]
})
export class AppModule { }