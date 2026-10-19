import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Portfolio: Full Stack Developer",
  description:
    "2nd Year BE IT Student & Full Stack Developer specializing in backend development, GenAI, cloud, and DevOps.",
  keywords: [
    "full stack developer",
    "backend developer",
    "portfolio",
    "next.js",
    "genai",
    "cloud",
    "devops",
  ],
  authors: [{ name: "Saumya Jha" }],
  openGraph: {
    title: "Portfolio: Full Stack Developer",
    description:
      "2nd Year BE IT Student & Full Stack Developer specializing in backend development, GenAI, cloud, and DevOps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className="min-h-full flex flex-col antialiased">
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
