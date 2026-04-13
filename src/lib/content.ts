import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export interface ContentMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  [key: string]: unknown;
}

export interface ContentItem {
  meta: ContentMeta;
  content: string;
}

/**
 * Get all content slugs for a given content type (e.g., "blog", "pages").
 */
export function getContentSlugs(contentType: string): string[] {
  const dir = path.join(contentDirectory, contentType);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

/**
 * Get parsed content and metadata for a single content item.
 */
export async function getContentBySlug(
  contentType: string,
  slug: string
): Promise<ContentItem | null> {
  const dir = path.join(contentDirectory, contentType);

  // Try .mdx first, then .md
  let filePath = path.join(dir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(dir, `${slug}.md`);
  }
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ? new Date(data.date).toISOString() : "",
      description: data.description ?? "",
      ...data,
    },
    content: contentHtml,
  };
}

/**
 * Get all content items for a given content type, sorted by date (newest first).
 */
export async function getAllContent(
  contentType: string
): Promise<ContentItem[]> {
  const slugs = getContentSlugs(contentType);
  const items = await Promise.all(
    slugs.map((slug) => getContentBySlug(contentType, slug))
  );

  return items
    .filter((item): item is ContentItem => item !== null)
    .sort((a, b) => {
      if (!a.meta.date || !b.meta.date) return 0;
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    });
}
