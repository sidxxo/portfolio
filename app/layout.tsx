import type { Metadata } from "next";
import { Funnel_Display} from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import BackgroundAudio from "@/components/BackgroundAudio";
import { ThemeProvider } from "next-themes";

import { VisibleProvider } from "@/context/VisibleContext";

import { Analytics } from "@vercel/analytics/next"
import OnekoCat from "@/components/OnekoCat";
import Footer from "@/components/Footer";
import LiveCursor from "@/components/LiveCursor";

import AudioPlayer from "@/components/AudioPlayer";



const funnelDisplay = Funnel_Display({
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Siddhant Kurmi",
  description: "welcome to my the most clean and minimal portfolio website",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "siddhant kurmi",
    description: "welcome to my the most clean and minimal portfolio website",
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "siddhant kurmi",
    description: "welcome to my the most clean and minimal portfolio website",
    images: "/og-image.png",
  },
  metadataBase: new URL("https://sidd.me"),
  alternates: {
    canonical: "https://sidd.me",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Siddhant Kurmi", url: "https://sidd.me" }],
};

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Siddhant Kurmi",
    url: "https://sidd.me",
    description: "Full-stack developer building AI-powered web applications with Next.js, TypeScript, Python, Redis, and PostgreSQL.",
    jobTitle: "Full Stack Developer",
    email: "siddhantkurmi620@gmail.com",
    sameAs: [
      "https://github.com/sidxxo",
      "https://x.com/shashwt558",
    ],
    knowsAbout: [
      "Next.js", "TypeScript", "Python", "Redis", "PostgreSQL",
      "LangChain", "OpenAI", "Supabase", "FastAPI",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          nonce={nonce}
        />
      </head>
      <body
        className={`${funnelDisplay.className} antialiased bg-white dark:bg-[#000000] scroll-smooth`}
      >

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem nonce={nonce}>
          <BackgroundAudio src="/verdisquo.mp3" loop={true} volume={0.3}>
          <VisibleProvider>
            <LiveCursor />
            {children}
            <AudioPlayer songName="Veridis Quo - Daft Punk" />
            <Footer />
          </VisibleProvider>
          </BackgroundAudio>
        </ThemeProvider>
        
        <OnekoCat />
        <Analytics />
      </body>
    </html>
  );
}
