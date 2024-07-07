import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class SampleResolver {
  @Query(() => String)
  async result() {
    return "ok";
  }
}
