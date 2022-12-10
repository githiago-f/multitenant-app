import { Module } from "@nestjs/common";
import { TenantConfigService } from "./service/tenant-config.service";
import { TenantService } from "./service/tenant.service";
import { ConfigModule } from '@nestjs/config';
import defaultsConfig from "app/config/defaults.config";

@Module({
  imports: [
    ConfigModule.forFeature(defaultsConfig)
  ],
  providers: [TenantConfigService, TenantService]
})
export class CoreModule {}
