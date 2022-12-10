import { ConfigItem } from "core/entity/config/config-item.entity";

export class UpdateConfigDTO {
  public tenantId!: string;

  public readonly configGroup!: string;

  public readonly configItem!: ConfigItem;
}
