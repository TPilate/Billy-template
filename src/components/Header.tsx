import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold text-zinc-900 dark:text-zinc-100"
        >
          Billy Template
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <li>
            <Link
              href="/blog"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
