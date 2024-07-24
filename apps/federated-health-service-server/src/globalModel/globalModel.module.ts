import { Module } from "@nestjs/common";
import { GlobalModelModuleBase } from "./base/globalModel.module.base";
import { GlobalModelService } from "./globalModel.service";
import { GlobalModelController } from "./globalModel.controller";
import { GlobalModelResolver } from "./globalModel.resolver";

@Module({
  imports: [GlobalModelModuleBase],
  controllers: [GlobalModelController],
  providers: [GlobalModelService, GlobalModelResolver],
  exports: [GlobalModelService],
})
export class GlobalModelModule {}
