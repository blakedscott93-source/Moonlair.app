import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SchemaMarkup from "@/components/seo/schema-markup";
import HydrationErrorBoundary from "@/components/ErrorBoundary";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://moonifest-extension.com'),
  title: "Moonifest — Your Daily Manifestation Dashboard",
  description: "Turn every new tab into your personal manifestation dashboard with tasks, journaling, habits, and mindfulness tools.",
  keywords: ["manifestation", "chrome extension", "new tab", "habits", "369 method", "gratitude", "dreams", "productivity", "mindfulness"],
  authors: [{ name: "Moonlair" }],
  creator: "Moonlair",
  publisher: "Moonlair",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moonifest-extension.com",
    title: "Moonifest — Your Daily Manifestation Dashboard",
    description: "Turn every new tab into your personal manifestation dashboard with tasks, journaling, habits, and mindfulness tools.",
    siteName: "Moonifest",
    images: [
      {
        url: "/Icons/icon512.png",
        width: 512,
        height: 512,
        alt: "Moonifest - Your Daily Manifestation Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonifest — Your Daily Manifestation Dashboard",
    description: "Turn every new tab into your personal manifestation dashboard with tasks, journaling, habits, and mindfulness tools.",
    creator: "@moonifest_ext",
    images: ["/Icons/icon512.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/Icons/icon32.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Icons/icon256.png" />
        <link rel="shortcut icon" href="/Icons/icon32.png" type="image/png" />
        <meta name="theme-color" content="#f59e0b" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress hydration errors before React loads
              (function() {
                const originalError = console.error;
                const originalWarn = console.warn;
                
                function suppressHydrationError(...args) {
                  const message = args[0];
                  if (typeof message === 'string') {
                    if (
                      message.includes('hydration') ||
                      message.includes('bis_skin_checked') ||
                      message.includes('server rendered HTML') ||
                      message.includes('tree hydrated') ||
                      message.includes("didn&apos;t match the client properties") ||
                      message.includes("This won&apos;t be patched up") ||
                      message.includes('A tree hydrated but some attributes') ||
                      message.includes('browser extension') ||
                      message.includes('messes with the HTML') ||
                      message.includes('SSR-ed Client Component') ||
                      message.includes('typeof window') ||
                      message.includes('Date.now') ||
                      message.includes('Math.random') ||
                      message.includes('Invalid HTML tag nesting')
                    ) {
                      return; // Suppress these errors completely
                    }
                  }
                  originalError.apply(console, args);
                }
                
                console.error = suppressHydrationError;
                console.warn = suppressHydrationError;
              })();
            `,
          }}
        />
        
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1922080955022497');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1922080955022497&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <HydrationErrorBoundary />
        <SchemaMarkup />
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
