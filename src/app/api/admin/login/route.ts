import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { adminCookieConfig, validateAdminPassword } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { password?: string };

  if (!body.password || !validateAdminPassword(body.password)) {
    return NextResponse.json(
      { message: "Invalid admin password." },
      { status: 401 },
    );
  }

  const cookieStore = await cookies();
  cookieStore.set(
    adminCookieConfig.name,
    body.password,
    adminCookieConfig.options,
  );

  return NextResponse.json({ success: true });
}
