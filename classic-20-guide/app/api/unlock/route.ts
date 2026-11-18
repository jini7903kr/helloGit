import { NextResponse } from "next/server";
import {
  COOKIE_NAME,
  authConfigured,
  makeToken,
  passwordOk,
} from "@/lib/auth";
import { allowAttempt, clientKey } from "@/lib/rate-limit";

export async function POST(request: Request) {
  if (!authConfigured()) {
    return NextResponse.json(
      { ok: false, error: "잠금이 아직 설정되지 않았습니다." },
      { status: 503 },
    );
  }

  const key = clientKey(request);
  if (!allowAttempt(key)) {
    return NextResponse.json(
      { ok: false, error: "잠시 후 다시 시도해 주세요." },
      { status: 429 },
    );
  }

  let password = "";
  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const body = (await request.json()) as { password?: string };
    password = String(body.password ?? "");
  } else {
    const form = await request.formData();
    password = String(form.get("password") ?? "");
  }

  if (!passwordOk(password)) {
    return NextResponse.json(
      { ok: false, error: "비밀번호가 맞지 않습니다." },
      { status: 401 },
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, makeToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
