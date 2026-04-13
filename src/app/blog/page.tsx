import Link from "next/link";
import { getAllContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Billy Template",
  description: "Read the latest posts from the Billy Template blog.",
};

export default async function BlogPage() {
  const posts = await getAllContent("blog");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        Blog
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        All posts from the CMS content directory.
      </p>

      <div className="mt-10 space-y-10">
        {posts.map((post) => (
          <article
            key={post.meta.slug}
            className="border-b border-zinc-200 pb-8 last:border-0 dark:border-zinc-800"
          >
            <Link href={`/blog/${post.meta.slug}`} className="group block">
              <h2 className="text-2xl font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                {post.meta.title}
              </h2>
              {post.meta.date && (
                <time className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
                  {new Date(post.meta.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}
              {post.meta.description && (
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                  {post.meta.description}
                </p>
              )}
            </Link>
          </article>
        ))}
        {posts.length === 0 && (
          <p className="text-zinc-500 dark:text-zinc-400">
            No posts yet. Add <code>.mdx</code> files to{" "}
            <code>content/blog/</code> to get started.
          </p>
        )}
      </div>
    </div>
  );
}
