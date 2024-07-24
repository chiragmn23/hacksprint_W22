import * as graphql from "@nestjs/graphql";
import { LocalModelResolverBase } from "./base/localModel.resolver.base";
import { LocalModel } from "./base/LocalModel";
import { LocalModelService } from "./localModel.service";

@graphql.Resolver(() => LocalModel)
export class LocalModelResolver extends LocalModelResolverBase {
  constructor(protected readonly service: LocalModelService) {
    super(service);
  }
}
