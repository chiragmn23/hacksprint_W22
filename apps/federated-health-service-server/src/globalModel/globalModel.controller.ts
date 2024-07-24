import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GlobalModelService } from "./globalModel.service";
import { GlobalModelControllerBase } from "./base/globalModel.controller.base";

@swagger.ApiTags("globalModels")
@common.Controller("globalModels")
export class GlobalModelController extends GlobalModelControllerBase {
  constructor(protected readonly service: GlobalModelService) {
    super(service);
  }
}
