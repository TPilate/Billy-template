import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { adminCookieConfig } from "@/lib/admin-auth";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete(adminCookieConfig.name);
  return NextResponse.json({ success: true });
}
