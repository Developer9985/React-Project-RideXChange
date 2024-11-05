import { defineConfig } from "drizzle-kit";

/**@type {import("drizzle-kit").Config } */

export default {
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{

    url:'postgresql://neondb_owner:Kg0fQG6YEPFw@ep-round-bush-a57cqvio.us-east-2.aws.neon.tech/RideXChange?sslmode=require'
  }
};
