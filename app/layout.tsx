import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import OnekoCat from "@/components/OnekoCat";
import { Analytics } from '@vercel/analytics/react'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanishq",
  description:
    "Tanishq's personal portfolio — showcasing full stack projects, skills, and availability for freelance or full-time opportunities.",
  keywords: [
    "Tanishq Patil",
    "Next.js",
    "full stack developer",
    "portfolio",
    "React",
    "TypeScript",
    "CloudNest",
    "Web3 developer",
  ],
  metadataBase: new URL("https://tanishq.dev"),
  openGraph: {
    title: "Tanishq Patil — Full Stack Developer",
    description:
      "Explore projects like CloudNest, developer tools, and stack expertise — all crafted by Tanishq.",
    url: "https://tanishq.dev",
    siteName: "Tanfolio",
    type: "website",
    images: [
      {
        url: "/og-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Tanishq's Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanishq Patil — Full Stack Developer",
    description:
      "Check out Tanishq's dev portfolio — full stack work, Web3 experiments, and more.",
    creator: "@tanishqstwt",
    images: ["/portfolio-og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "Tanishq Patil", url: "https://tanishq.dev" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head >
        <link
          href="https://api.fontshare.com/v2/css?f[]=khand@400&f[]=array@400&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <OnekoCat />
        </ThemeProvider>
      </body>
    </html>
  );
}

