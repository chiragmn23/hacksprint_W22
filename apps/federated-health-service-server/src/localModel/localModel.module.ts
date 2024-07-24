import { Module } from "@nestjs/common";
import { LocalModelModuleBase } from "./base/localModel.module.base";
import { LocalModelService } from "./localModel.service";
import { LocalModelController } from "./localModel.controller";
import { LocalModelResolver } from "./localModel.resolver";

@Module({
  imports: [LocalModelModuleBase],
  controllers: [LocalModelController],
  providers: [LocalModelService, LocalModelResolver],
  exports: [LocalModelService],
})
export class LocalModelModule {}
