import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // 1. Import Outfit font
import "./globals.css";

// 2. Configure font
const outfit = Outfit({ subsets: ["latin"] });

// 3. Set Metadata
export const metadata: Metadata = {
  title: "Tajik Mango | Ояндаи тароват",
  description: "Ояндаи шарбати тозаро бо Tajik Mango ҳис кунед.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tg">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
