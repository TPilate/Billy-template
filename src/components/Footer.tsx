export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-3xl px-6 py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            className="font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          &middot; Powered by Markdown CMS
        </p>
      </div>
    </footer>
  );
}
