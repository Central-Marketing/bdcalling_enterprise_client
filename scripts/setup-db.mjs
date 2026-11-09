// One-time setup: creates the bdcallingenterprise database, its collections and indexes.
// Run: node --env-file=.env scripts/setup-db.mjs
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "bdcallingenterprise";
if (!uri) { console.error("MONGODB_URI missing (use --env-file=.env)"); process.exit(1); }

const client = new MongoClient(uri, { serverSelectionTimeoutMS: 10000 });
try {
  await client.connect();
  const db = client.db(dbName);
  const existing = new Set((await db.listCollections({}, { nameOnly: true }).toArray()).map((c) => c.name));
  for (const name of ["contact_messages", "consultation_requests"]) {
    if (!existing.has(name)) await db.createCollection(name);
    await db.collection(name).createIndexes([
      { key: { createdAt: -1 }, name: "createdAt_desc" },
      { key: { status: 1, createdAt: -1 }, name: "status_createdAt" },
      { key: { email: 1 }, name: "email" },
    ]);
    console.log(`✓ ${dbName}.${name} ready (${await db.collection(name).countDocuments()} documents)`);
  }
} catch (e) {
  console.error("✗ Setup failed:", e.codeName || e.name, "-", e.message);
  process.exitCode = 1;
} finally {
  await client.close();
}
