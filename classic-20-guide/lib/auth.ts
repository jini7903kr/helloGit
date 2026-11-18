import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const COOKIE_NAME = "classic20_guide_ok";

export function guidePassword(): string | null {
  const value = process.env.GUIDE_PASSWORD?.trim();
  return value ? value : null;
}

export function sessionSecret(): string | null {
  const value = process.env.GUIDE_SESSION_SECRET?.trim();
  return value ? value : null;
}

export function authConfigured(): boolean {
  return Boolean(guidePassword() && sessionSecret());
}

export function makeToken(): string {
  const secret = sessionSecret();
  if (!secret) {
    throw new Error("GUIDE_SESSION_SECRET is not configured");
  }
  return createHmac("sha256", secret)
    .update("classic20-guide-unlocked")
    .digest("hex");
}

export function tokenMatches(token: string | undefined): boolean {
  if (!token || !authConfigured()) return false;
  const expected = makeToken();
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function isUnlocked(): Promise<boolean> {
  if (!authConfigured()) return false;
  const jar = await cookies();
  return tokenMatches(jar.get(COOKIE_NAME)?.value);
}

export function passwordOk(input: string): boolean {
  const expected = guidePassword();
  if (!expected) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
