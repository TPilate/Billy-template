import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import {
  getSiteContent,
  sanitizeSiteContent,
  SiteContent,
  updateSiteContent,
} from "@/lib/site-content";

export async function GET() {
  try {
    const isAllowed = await isAdminAuthenticated();

    if (!isAllowed) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const content = await getSiteContent();
    return NextResponse.json(sanitizeSiteContent(content));
  } catch (error) {
    console.error("Failed to read admin content", error);
    return NextResponse.json(
      { message: "Unable to read content." },
      { status: 500 },
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const isAllowed = await isAdminAuthenticated();

    if (!isAllowed) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const payload = (await request.json()) as SiteContent;
    const updated = await updateSiteContent(payload);
    return NextResponse.json(updated);
  } catch (error) {
    console.error("Failed to update admin content", error);
    return NextResponse.json(
      { message: "Unable to update content." },
      { status: 500 },
    );
  }
}
