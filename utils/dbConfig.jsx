import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://finan-smart_owner:uk3aed9QZotj@ep-wispy-breeze-a5iadk8t.us-east-2.aws.neon.tech/finan-smart?sslmode=require"
);
export const db = drizzle(sql, { schema });


//"postgresql://FinDB_owner:npg_HrPyfk4jIV8e@ep-quiet-wave-a5z8sru5.us-east-2.aws.neon.tech/FinDB?sslmode=require" - my neon db connection string