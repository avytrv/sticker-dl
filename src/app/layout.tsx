import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LINE Sticker Downloader",
  description: "Download sticker packs from LINE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
