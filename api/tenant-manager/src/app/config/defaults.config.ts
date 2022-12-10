import { registerAs } from "@nestjs/config";

export default registerAs('defaults', () => ({
  defaultLogoUrl: process.env.DEFAULT_LOGO_URL
}));
