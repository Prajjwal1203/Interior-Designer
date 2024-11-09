import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
 /* out: './drizzle',*/
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://neondb_owner:Bliv7FbPKmT4@ep-soft-dust-a51h7x18.us-east-2.aws.neon.tech/neondb?sslmode=require',
  },
});
