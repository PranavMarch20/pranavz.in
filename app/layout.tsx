import type { Metadata } from "next";
import { Schibsted_Grotesk, Space_Mono, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Divider } from "@/components/common/divider";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/common/theme-provider";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});


export const metadata: Metadata = {
  title: {
    default: "Pranav Kumar Singh - Full Stack Developer",
    template: "%s - Pranav Kumar Singh",
  },

  description:
    "Portfolio of Pranav Kumar Singh, a Full Stack and Backend Developer building scalable web applications with React, Next.js, Node.js, and modern backend technologies.",

  metadataBase: new URL("https://pranavz.in"),

  keywords: [
    "Pranav Kumar Singh",
    "Full Stack Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Pranav Kumar Singh",
      url: "https://pranavz.in",
    },
  ],

  creator: "Pranav Kumar Singh",
  publisher: "Pranav Kumar Singh",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Pranav Kumar Singh - Full Stack Developer",

    description:
      "Portfolio of Pranav Kumar Singh, a Full Stack and Backend Developer building scalable web applications.",

    url: "https://pranavz.in",

    siteName: "Pranav Kumar Singh",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pranav Kumar Singh - Full Stack Developer",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Pranav Kumar Singh - Full Stack Developer",

    description:
      "Portfolio of Pranav Kumar Singh, a Full Stack and Backend Developer building scalable web applications.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${schibstedGrotesk.variable} ${spaceMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <div className="w-full max-w-[680px] mx-auto flex-1">
            <Header />
            <div className="pt-8">
              {children}
            </div>
            
          </div>
          <Divider className="mb-0"/>
          <Footer />
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}