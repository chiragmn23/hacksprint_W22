import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LocalModelServiceBase } from "./base/localModel.service.base";

@Injectable()
export class LocalModelService extends LocalModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
