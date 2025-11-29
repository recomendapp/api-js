import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'http://localhost:3000/api-docs-json',
  output: 'src/client/__generated__',
  client: '@hey-api/client-fetch',
});