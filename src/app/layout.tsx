import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio — Full Stack Developer",
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
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio — Full Stack Developer",
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
