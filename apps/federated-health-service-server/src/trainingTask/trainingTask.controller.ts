import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrainingTaskService } from "./trainingTask.service";
import { TrainingTaskControllerBase } from "./base/trainingTask.controller.base";

@swagger.ApiTags("trainingTasks")
@common.Controller("trainingTasks")
export class TrainingTaskController extends TrainingTaskControllerBase {
  constructor(protected readonly service: TrainingTaskService) {
    super(service);
  }
}
