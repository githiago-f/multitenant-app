import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTenantDTO } from "core/dto/create-tenant.dto";
import { UpdateConfigDTO } from "core/dto/update-config.dto";
import { Tenant } from "core/entity/tenant/tenant.entity";
import { randomUUID } from "crypto";
import { TenantConfigService } from "./tenant-config.service";

@Injectable()
export class TenantService {
  private tenants = new Map<string, Tenant>();

  constructor(
    private readonly tenantConfigService: TenantConfigService
  ) {}

  async create(request: CreateTenantDTO) {
    const uuid = randomUUID();
    const tenant = new Tenant(uuid, request.name, request.domain);
    tenant.configs.push(
      await this.tenantConfigService.defaultConfigs()
    );
    this.tenants.set(uuid, tenant);
    return tenant;
  }

  async find() {
    return this.tenants.values();
  }

  async findOne(id: string) {
    if(this.tenants.has(id)) new NotFoundException('No tenants found');
    return this.tenants.get(id);
  }

  async updateConfig(request: UpdateConfigDTO) {
    const tenant = await this.findOne(request.tenantId)
    this.tenantConfigService.updateConfig(tenant, request);
    return tenant;
  }
}
