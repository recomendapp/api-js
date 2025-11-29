import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'https://api.recomend.app/api-docs-json',
  output: 'src/__generated__',
  client: '@hey-api/client-fetch',
});