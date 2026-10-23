import 'dotenv/config';
import { z } from 'zod';
const schema=z.object({NODE_ENV:z.enum(['development','test','production']).default('development'),PORT:z.coerce.number().int().positive().default(4000),CLIENT_ORIGIN:z.string().url().default('http://localhost:5173'),MONGODB_URI:z.string().min(1).default('mongodb://127.0.0.1:27017/career_evidence_coach'),SESSION_SECRET:z.string().min(32,'SESSION_SECRET must contain at least 32 characters').default('development-only-change-this-secret-please'),MAX_UPLOAD_MB:z.coerce.number().positive().default(10)});
export const env=schema.parse(process.env);
