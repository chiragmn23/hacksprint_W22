import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HospitalServiceBase } from "./base/hospital.service.base";

@Injectable()
export class HospitalService extends HospitalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
