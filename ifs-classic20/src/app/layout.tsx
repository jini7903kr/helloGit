import type { Metadata } from "next";
import { Geist_Mono, Gowun_Batang, IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm",
});

const display = Gowun_Batang({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display-face",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "인라인 프리스타일 클래식 2.0",
  description:
    "PRO Skate System 클래식 2.0 채점 규정의 한국어 번역. 기술 점수, 풋워크, 예술 요소, 트릭 매트릭스.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
