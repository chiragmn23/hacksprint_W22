import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HospitalService } from "./hospital.service";
import { HospitalControllerBase } from "./base/hospital.controller.base";

@swagger.ApiTags("hospitals")
@common.Controller("hospitals")
export class HospitalController extends HospitalControllerBase {
  constructor(protected readonly service: HospitalService) {
    super(service);
  }
}
