import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LocalModelService } from "./localModel.service";
import { LocalModelControllerBase } from "./base/localModel.controller.base";

@swagger.ApiTags("localModels")
@common.Controller("localModels")
export class LocalModelController extends LocalModelControllerBase {
  constructor(protected readonly service: LocalModelService) {
    super(service);
  }
}
