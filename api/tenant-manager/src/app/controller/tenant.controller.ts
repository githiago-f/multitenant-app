import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateTenantDTO } from "core/dto/create-tenant.dto";
import { UpdateConfigDTO } from "core/dto/update-config.dto";
import { TenantService } from "core/service/tenant.service";

@Controller('tenants')
export class TenantController {

  constructor(private readonly tenantService: TenantService) {}

  @Get()
  public findAll() {
    return this.tenantService.find();
  }

  @Get('/:tenantId')
  public findOne(@Param('tenantId') tenantId: string) {
    return this.tenantService.findOne(tenantId);
  }

  @Post()
  public createTenant(@Body() createTenant: CreateTenantDTO) {
    return this.tenantService.create(createTenant);
  }

  @Patch('/:tenantId/configs')
  public updateConfigs(
    @Param('tenantId') tenantId: string,
    @Body() update: UpdateConfigDTO
  ) {
    update.tenantId = tenantId;
    return this.tenantService.updateConfig(update);
  }
}
