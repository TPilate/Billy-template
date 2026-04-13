import { MongoClient } from "mongodb";

const uri =
  process.env.MONGODB_URI ?? "mongodb://localhost:27042/billy";

if (!uri) {
  throw new Error("Missing MongoDB URI. Set MONGODB_URI in your environment.");
}

const options = {
  // Server app with steady traffic: keep a moderate pool and fail fast on outages.
  maxPoolSize: 20,
  minPoolSize: 2,
  maxIdleTimeMS: 300_000,
  connectTimeoutMS: 10_000,
  serverSelectionTimeoutMS: 5_000,
} as const;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const client = new MongoClient(uri, options);

export const mongoClientPromise =
  global._mongoClientPromise ?? client.connect();

if (process.env.NODE_ENV !== "production") {
  global._mongoClientPromise = mongoClientPromise;
}

function getDbName() {
  const dbNameFromEnv = process.env.MONGODB_DB_NAME;

  if (dbNameFromEnv) {
    return dbNameFromEnv;
  }

  try {
    const parsed = new URL(uri);
    return parsed.pathname.replace("/", "") || "billy";
  } catch {
    return "billy";
  }
}

export async function getDb() {
  const mongoClient = await mongoClientPromise;
  return mongoClient.db(getDbName());
}
