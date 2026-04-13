import Link from "next/link";
import { getAllContent } from "@/lib/content";

export default async function Home() {
  const posts = await getAllContent("blog");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Billy Template
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          A Next.js template with built-in CMS capabilities. Manage your content
          through Markdown and MDX files.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Latest Posts
        </h2>
        <div className="mt-6 space-y-8">
          {posts.map((post) => (
            <article key={post.meta.slug}>
              <Link href={`/blog/${post.meta.slug}`} className="group block">
                <h3 className="text-xl font-medium text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                  {post.meta.title}
                </h3>
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
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {post.meta.description}
                  </p>
                )}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
