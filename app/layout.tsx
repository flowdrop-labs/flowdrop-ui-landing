import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HeaderWrapper from "@/components/HeaderWrapper";
import PHProvider from "@/components/PostHogProvider";
import { Footer } from "@/components/ui";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flowdrop - AI Workflow Builder for Non-Coders",
  description: "Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes.",
  icons: {
    icon: [
      // Google requires minimum 48x48px - using 96x96px (perfect for search results)
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      // Fallback to SVG for modern browsers
      { url: '/favicon.svg', type: 'image/svg+xml' },
      // Legacy browser support
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'icon', url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  keywords: [
    "AI workflow builder",
    "no-code automation",
    "ai agents",
    "agentic ai",
    "agentic tools",
    "build your own ai agent", 
    "workflow automation",
    "AI automation",
    "business automation",
    "workflow builder",
    "automation platform",
    "AI workflows",
    "no-code platform",
    "business process automation",
    "productivity tools"
  ],
  authors: [{ name: "Flowdrop Team" }],
  creator: "Flowdrop",
  publisher: "Flowdrop",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://flowdrop.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Flowdrop - AI Workflow Builder for Non-Coders",
    description: "Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes.",
    url: 'https://flowdrop.ai',
    siteName: 'Flowdrop',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://flowdrop.ai/website-preview.png',
        width: 1200,
        height: 630,
        alt: 'Flowdrop - AI Workflow Builder',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Flowdrop - AI Workflow Builder for Non-Coders",
    description: "Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes.",
    images: ['https://flowdrop.ai/website-preview.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE || 'your-google-verification-code',
  },
  other: {
    "viewport": "width=device-width, initial-scale=1",
    "geo.region": "US-CA",
    "geo.placename": "San Francisco",
    "geo.position": "37.7749;-122.4194",
    "ICBM": "37.7749, -122.4194",
    "og:image:width": "1200",
    "og:image:height": "630",
    "twitter:image:alt": "Flowdrop - AI Workflow Builder"
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
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {/* Favicon links - 96x96px meets Google's requirements */}
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Structured data for SEO - added here to avoid hydration issues */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Flowdrop",
              "alternateName": "Flowdrop",
              "url": "https://flowdrop.ai",
              "logo": "https://flowdrop.ai/website-preview.png",
              "description": "Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes.",
              "foundingDate": "2024",
              "sameAs": [
                "https://twitter.com/flowdrop",
                "https://linkedin.com/company/flowdrop"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Flowdrop",
              "url": "https://flowdrop.ai",
              "description": "AI workflow builder for non-coders. Build and deploy production automations in under five minutes.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://flowdrop.ai/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Flowdrop",
              "url": "https://flowdrop.ai",
              "description": "AI-powered workflow builder that deploys production automations in under five minutes.",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "19",
                "priceCurrency": "USD",
                "priceValidUntil": "2025-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              }
            })
          }}
        />
        <PHProvider>
          <HeaderWrapper>
            {children}
            <Footer />
          </HeaderWrapper>
        </PHProvider>
        {/* Defer analytics for better performance */}
        <Analytics mode="production" />
        <SpeedInsights />
      </body>
    </html>
  );
}
