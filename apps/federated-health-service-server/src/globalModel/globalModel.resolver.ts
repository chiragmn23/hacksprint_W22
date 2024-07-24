import * as graphql from "@nestjs/graphql";
import { GlobalModelResolverBase } from "./base/globalModel.resolver.base";
import { GlobalModel } from "./base/GlobalModel";
import { GlobalModelService } from "./globalModel.service";

@graphql.Resolver(() => GlobalModel)
export class GlobalModelResolver extends GlobalModelResolverBase {
  constructor(protected readonly service: GlobalModelService) {
    super(service);
  }
}
