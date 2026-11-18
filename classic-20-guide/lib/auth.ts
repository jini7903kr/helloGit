import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const COOKIE_NAME = "classic20_guide_ok";

/** Local preview only when GUIDE_PASSWORD is unset. Published app uses the secret. */
export const SAMPLE_PASSWORD = "classic20";

export function expectedPassword(): string {
  return process.env.GUIDE_PASSWORD?.trim() || SAMPLE_PASSWORD;
}

export function sessionSecret(): string {
  return (
    process.env.GUIDE_SESSION_SECRET?.trim() ||
    `session:${expectedPassword()}`
  );
}

export function makeToken(): string {
  return createHmac("sha256", sessionSecret())
    .update("classic20-guide-unlocked")
    .digest("hex");
}

export function tokenMatches(token: string | undefined): boolean {
  if (!token) return false;
  const expected = makeToken();
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function isUnlocked(): Promise<boolean> {
  const jar = await cookies();
  return tokenMatches(jar.get(COOKIE_NAME)?.value);
}

export function passwordOk(input: string): boolean {
  const expected = expectedPassword();
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
