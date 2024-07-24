import { Module } from "@nestjs/common";
import { TrainingTaskModuleBase } from "./base/trainingTask.module.base";
import { TrainingTaskService } from "./trainingTask.service";
import { TrainingTaskController } from "./trainingTask.controller";
import { TrainingTaskResolver } from "./trainingTask.resolver";

@Module({
  imports: [TrainingTaskModuleBase],
  controllers: [TrainingTaskController],
  providers: [TrainingTaskService, TrainingTaskResolver],
  exports: [TrainingTaskService],
})
export class TrainingTaskModule {}
