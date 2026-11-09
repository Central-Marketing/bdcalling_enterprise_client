// Server-only MongoDB access. Never import this from a client component.
import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "bdcallingenterprise";

// Reuse one client across hot reloads (dev) and across requests (prod).
const g = globalThis as unknown as { _mongoClient?: Promise<MongoClient> };

function client(): Promise<MongoClient> {
  if (!uri) throw new Error("MONGODB_URI is not set. Add it to .env.");
  if (!g._mongoClient) {
    g._mongoClient = new MongoClient(uri, { maxPoolSize: 5, serverSelectionTimeoutMS: 8000 }).connect();
    g._mongoClient.catch(() => { g._mongoClient = undefined; }); // retry next time if the first connect fails
  }
  return g._mongoClient;
}

export async function getDb(): Promise<Db> {
  return (await client()).db(dbName);
}

/** Collection names, one per form type. */
export const COLLECTIONS = { contact: "contact_messages", consultation: "consultation_requests" } as const;
