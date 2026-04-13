import { notFound } from "next/navigation";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = getContentSlugs("pages");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getContentBySlug("pages", slug);
  if (!page) return {};
  return {
    title: `${page.meta.title} — Billy Template`,
    description: page.meta.description,
  };
}

export default async function CmsPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const page = await getContentBySlug("pages", slug);

  if (!page) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {page.meta.title}
        </h1>
        {page.meta.description && (
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {page.meta.description}
          </p>
        )}
      </header>
      <div
        className="prose prose-zinc max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </article>
  );
}
