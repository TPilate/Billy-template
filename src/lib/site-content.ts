import "server-only";
import type { WithId } from "mongodb";
import { getDb } from "@/lib/mongodb";
import { defaultSiteContent, SiteContent } from "@/lib/site-content-schema";

export type { ServiceItem, SiteContent } from "@/lib/site-content-schema";

const COLLECTION_NAME = "siteContent";

export async function getSiteContent() {
  const db = await getDb();
  const collection = db.collection<SiteContent>(COLLECTION_NAME);
  const existing = await collection.findOne({ key: "home" });

  if (existing) {
    return existing;
  }

  await collection.insertOne(defaultSiteContent);
  return defaultSiteContent;
}

type StoredSiteContent = WithId<SiteContent>;

export function sanitizeSiteContent(doc: SiteContent | StoredSiteContent): SiteContent {
  const { _id, ...safeDoc } = doc as StoredSiteContent;
  void _id;
  return safeDoc;
}

export async function updateSiteContent(input: SiteContent) {
  const db = await getDb();
  const collection = db.collection<SiteContent>(COLLECTION_NAME);

  const payload: SiteContent = {
    ...input,
    key: "home",
    updatedAt: new Date().toISOString(),
  };

  await collection.updateOne(
    { key: "home" },
    { $set: payload },
    { upsert: true },
  );

  return payload;
}
