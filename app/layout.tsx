import type { Metadata } from "next";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LearnVox - AI Teaching & Learning Platform",
    template: "%s | LearnVox",
  },
  description: "LearnVox: The future of corporate training and learning with a real-time AI teaching platform.",
  openGraph: {
    title: "LearnVox - AI Teaching & Learning Platform",
    description: "Interactive AI-powered lessons with real-time voice interaction",
    url: "https://learnvox.com",
    siteName: "LearnVox",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "LearnVox Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LearnVox - AI Teaching & Learning Platform",
    description: "Interactive AI-powered lessons with real-time voice interaction",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased bg-background`}>
        <ClerkProvider appearance={{ variables: { colorPrimary: '#fe5933' } }}>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
