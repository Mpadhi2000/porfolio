import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mayank-padhi.vercel.app"),
  title: {
    default: "Mayank Padhi | Frontend-Focused Full-Stack Developer",
    template: "%s | Mayank Padhi",
  },
  description:
    "Portfolio of Mayank Padhi, a frontend-focused full-stack developer building fast, secure, and scalable web applications with React, Next.js, and modern API architecture.",
  keywords: [
    "Mayank Padhi",
    "Frontend Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "WordPress Developer",
    "Web Performance",
  ],
  authors: [{ name: "Mayank Padhi" }],
  openGraph: {
    title: "Mayank Padhi | Frontend-Focused Full-Stack Developer",
    description:
      "I build fast, scalable web products that users trust and teams can grow.",
    url: "https://mayank-padhi.vercel.app/",
    siteName: "Mayank Portfolio",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Padhi | Frontend-Focused Full-Stack Developer",
    description:
      "Portfolio focused on production-grade frontend engineering, API integration, performance, and security.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
