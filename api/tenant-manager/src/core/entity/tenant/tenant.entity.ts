import { ConfigGroup } from "../config/config-group.entity";

export class Tenant {
  public readonly configs: ConfigGroup[]

  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly domain: string
  ){
    this.configs = [];
  }
}
