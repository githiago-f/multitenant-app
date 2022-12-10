import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import defaultsConfig from "app/config/defaults.config";
import { UpdateConfigDTO } from "core/dto/update-config.dto";
import { ConfigGroup } from "core/entity/config/config-group.entity";
import { ConfigItem } from "core/entity/config/config-item.entity";
import { Tenant } from "core/entity/tenant/tenant.entity";
import { TenantStatus } from "core/entity/tenant/vo/tenant-status.enum";

@Injectable()
export class TenantConfigService {
  constructor(
    @Inject(defaultsConfig.KEY)
    private readonly defaults: ConfigType<typeof defaultsConfig>
  ){}

  async defaultConfigs() {
    const defaultConfigGroup = new ConfigGroup('general');
    defaultConfigGroup.setItem(
      new ConfigItem('status', TenantStatus.OFF)
    );
    defaultConfigGroup.setItem(
      new ConfigItem('logo', this.defaults.defaultLogoUrl)
    );
    return defaultConfigGroup;
  }

  /**
   * @warning will update the tenant's config on the method
   */
  async updateConfig(tenant: Tenant, request: UpdateConfigDTO) {
    const idx = tenant.configs.findIndex(i => i.name === request.configGroup);
    if(idx >= 0) {
      tenant.configs[idx].setItem(request.configItem);
    }
    return tenant.configs;
  }
}
