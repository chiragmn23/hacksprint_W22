import * as graphql from "@nestjs/graphql";
import { TrainingTaskResolverBase } from "./base/trainingTask.resolver.base";
import { TrainingTask } from "./base/TrainingTask";
import { TrainingTaskService } from "./trainingTask.service";

@graphql.Resolver(() => TrainingTask)
export class TrainingTaskResolver extends TrainingTaskResolverBase {
  constructor(protected readonly service: TrainingTaskService) {
    super(service);
  }
}
