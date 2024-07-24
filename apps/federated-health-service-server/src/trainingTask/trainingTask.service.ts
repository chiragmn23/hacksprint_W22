import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrainingTaskServiceBase } from "./base/trainingTask.service.base";

@Injectable()
export class TrainingTaskService extends TrainingTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
