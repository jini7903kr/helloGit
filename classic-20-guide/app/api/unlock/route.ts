import { NextResponse } from "next/server";
import { COOKIE_NAME, makeToken, passwordOk } from "@/lib/auth";

export async function POST(request: Request) {
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
