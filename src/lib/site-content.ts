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
    return normalizeSiteContent(existing);
  }

  await collection.insertOne(defaultSiteContent);
  return defaultSiteContent;
}

type StoredSiteContent = WithId<SiteContent>;

export function sanitizeSiteContent(doc: SiteContent | StoredSiteContent): SiteContent {
  const { _id, ...safeDoc } = doc as StoredSiteContent;
  void _id;
  return normalizeSiteContent(safeDoc);
}

function normalizeSiteContent(input: Partial<SiteContent>): SiteContent {
  const services = input.services?.items ?? defaultSiteContent.services.items;

  return {
    ...defaultSiteContent,
    ...input,
    hero: {
      ...defaultSiteContent.hero,
      ...input.hero,
    },
    visuals: {
      ...defaultSiteContent.visuals,
      ...input.visuals,
    },
    approach: {
      ...defaultSiteContent.approach,
      ...input.approach,
    },
    services: {
      ...defaultSiteContent.services,
      ...input.services,
      items: services.map((service, index) => ({
        ...defaultSiteContent.services.items[index % defaultSiteContent.services.items.length],
        ...service,
        price: service.price ?? "60 EUR",
      })),
    },
    pricing: {
      ...defaultSiteContent.pricing,
      ...input.pricing,
    },
    locations: {
      ...defaultSiteContent.locations,
      ...input.locations,
    },
    contact: {
      ...defaultSiteContent.contact,
      ...input.contact,
    },
    seo: {
      ...defaultSiteContent.seo,
      ...input.seo,
    },
  };
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
