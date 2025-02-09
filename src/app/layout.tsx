import type { Metadata } from "next";
import { Ovo, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "Sami Ali | Portfolio",
  description: "Sami Ali | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased leading-8 overflow-x-hidden`}
      >
        <SpeedInsights />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
