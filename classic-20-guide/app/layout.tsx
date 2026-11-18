import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "클래식 2.0 한눈에 보기",
  description: "인라인 프리스타일 Classic 2.0 쉬운 말 합본 안내",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
