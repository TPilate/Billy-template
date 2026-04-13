import { NextResponse } from "next/server";
import { getSiteContent, sanitizeSiteContent } from "@/lib/site-content";

export async function GET() {
  try {
    const content = await getSiteContent();
    return NextResponse.json(sanitizeSiteContent(content));
  } catch (error) {
    console.error("Failed to fetch site content", error);
    return NextResponse.json(
      { message: "Unable to load site content." },
      { status: 500 },
    );
  }
}
