import { Module } from "@nestjs/common";
import { HospitalModuleBase } from "./base/hospital.module.base";
import { HospitalService } from "./hospital.service";
import { HospitalController } from "./hospital.controller";
import { HospitalResolver } from "./hospital.resolver";

@Module({
  imports: [HospitalModuleBase],
  controllers: [HospitalController],
  providers: [HospitalService, HospitalResolver],
  exports: [HospitalService],
})
export class HospitalModule {}
