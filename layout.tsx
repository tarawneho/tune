import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TuneGirl — Live techno & DJ sets",
  description: "Andrea Gill aka TuneGirl. Improvised modular techno, live performances and DJ sets. Explore dates, videos and booking enquiries.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
