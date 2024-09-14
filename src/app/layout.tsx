import "~/styles/globals.css";

import { type Metadata } from "next";

import Link from "next/link";
import { Github, ReadCV, Shaka, X } from "~/icons";

export const metadata: Metadata = {
  title: "twadd",
  description: "twadd3",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
