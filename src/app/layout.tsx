import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://richesogigi.dev" // Replace with your actual domain
      : "http://localhost:3000"
  ),
  title: "Riches Ogigi | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer specializing in backend development with expertise in NestJS, TypeScript, and PostgreSQL. Currently studying Computer Science and Mathematics at Mountain Top University.",
  keywords: [
    "Riches Ogigi",
    "Full Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "React",
    "NextJS",
    "Mountain Top University",
    "Computer Science",
  ],
  authors: [{ name: "Riches Ogigi" }],
  creator: "Riches Ogigi",
  publisher: "Riches Ogigi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://richesogigi.vercel.app",
    title: "Riches Ogigi | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in backend development with expertise in NestJS, TypeScript, and PostgreSQL.",
    siteName: "Riches Ogigi Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Riches Ogigi - Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riches Ogigi | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in backend development with expertise in NestJS, TypeScript, and PostgreSQL.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
