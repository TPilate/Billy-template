import { notFound } from "next/navigation";
import Link from "next/link";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = getContentSlugs("blog");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getContentBySlug("blog", slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} — Billy Template`,
    description: post.meta.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const post = await getContentBySlug("blog", slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        ← Back to Blog
      </Link>
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {post.meta.title}
        </h1>
        {post.meta.date && (
          <time className="mt-2 block text-sm text-zinc-500 dark:text-zinc-400">
            {new Date(post.meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
        {post.meta.description && (
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {post.meta.description}
          </p>
        )}
      </header>
      <div
        className="prose prose-zinc max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
