import { cookies } from "next/headers";

const ADMIN_COOKIE_NAME = "billy_admin_session";

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD ?? "change-me";
}

export function validateAdminPassword(password: string) {
  return password === getAdminPassword();
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME);

  if (!session) {
    return false;
  }

  return session.value === getAdminPassword();
}

export const adminCookieConfig = {
  name: ADMIN_COOKIE_NAME,
  options: {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  },
};
