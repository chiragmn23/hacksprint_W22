import * as graphql from "@nestjs/graphql";
import { HospitalResolverBase } from "./base/hospital.resolver.base";
import { Hospital } from "./base/Hospital";
import { HospitalService } from "./hospital.service";

@graphql.Resolver(() => Hospital)
export class HospitalResolver extends HospitalResolverBase {
  constructor(protected readonly service: HospitalService) {
    super(service);
  }
}
