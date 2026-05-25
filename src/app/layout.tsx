import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Craft Mode — AI-Powered Creative Studio",
  description:
    "Craft Mode builds and runs your brand's content engine using AI-powered systems — so you stay visible, consistent, and growing.",
  openGraph: {
    title: "Craft Mode — AI-Powered Creative Studio",
    description:
      "AI-powered social media and content systems for modern businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
