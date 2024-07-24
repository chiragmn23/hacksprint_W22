import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GlobalModelServiceBase } from "./base/globalModel.service.base";

@Injectable()
export class GlobalModelService extends GlobalModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
