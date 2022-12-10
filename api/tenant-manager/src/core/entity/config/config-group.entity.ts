import { ConfigItem } from "./config-item.entity";

export class ConfigGroup {
  public readonly items:
    Map<ConfigItem["key"], ConfigItem["value"]>;

  constructor(
    public readonly name: string
  ){
    this.items = new Map();
  }

  setItem(configItem: ConfigItem) {
    this.items.set(configItem.key, configItem.value);
  }

  getItem(key: ConfigItem["key"]) {
    return new ConfigItem(key, this.items.get(key));
  }
}
