import AdminEditor from "@/app/admin/AdminEditor";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getSiteContent, sanitizeSiteContent } from "@/lib/site-content";
import type { SiteContent } from "@/lib/site-content-schema";

export default async function AdminPage() {
  const authenticated = await isAdminAuthenticated();

  let initialContent: SiteContent | null = null;
  if (authenticated) {
    initialContent = sanitizeSiteContent(await getSiteContent());
  }

  return (
    <AdminEditor
      initialContent={initialContent}
      initialAuthenticated={authenticated}
    />
  );
}
