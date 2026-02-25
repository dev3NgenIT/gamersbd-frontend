// config/metadata.ts
import { Metadata } from "next";

interface SiteConfig {
  name: string;
  shortName?: string;
  url: string;
  ogImage: string;
  description: string;
  keywords: string[];
  twitterHandle: string;
  googleVerification?: string;
  yandexVerification?: string;
  bingVerification?: string;
  facebookAppId?: string;
  themeColor?: string;
  backgroundColor?: string;
}

export const siteConfig: SiteConfig = {
  name: "GamersBD - Your Ultimate Gaming Destination",
  shortName: "GBD",
  url: "https://gamersbd.com",
  ogImage: "https://gamersbd.com/og-image.jpg",
  description:
    "Your ultimate destination for gaming products, accessories, and collectibles in Bangladesh",
  keywords: [
    "gaming",
    "video games",
    "gaming accessories",
    "PlayStation",
    "Xbox",
    "Nintendo",
    "PC gaming",
    "gaming chair",
    "gaming headset",
    "Bangladesh",
  ],
  twitterHandle: "@gamersbd",
  googleVerification: "your-google-verification-code",
  yandexVerification: "your-yandex-verification-code",
  bingVerification: "your-bing-verification-code",
  facebookAppId: "your-facebook-app-id",
  themeColor: "#191919",
  backgroundColor: "#ffffff",
};

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(", "),
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  generator: "Next.js",
  applicationName: siteConfig.name,

  // Format Detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Base URL
  metadataBase: new URL(siteConfig.url),

  // Canonical URL
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-us",
      "bn-BD": "/bn-bd",
    },
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Bangladesh",
    emails: ["support@gamersbd.com"],
    phoneNumbers: ["+880123456789"],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
  },

  // Facebook
  facebook: {
    appId: siteConfig.facebookAppId,
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: siteConfig.themeColor,
      },
    ],
  },

  // Manifest for PWA
  manifest: "/site.webmanifest",

  // Theme
  themeColor: siteConfig.themeColor,
  colorScheme: "light dark",

  // Apple Web App
  appleWebApp: {
    capable: true,
    title: siteConfig.shortName || siteConfig.name,
    statusBarStyle: "black-translucent",
    startupImage: [
      {
        url: "/apple-splash-2048-2732.png",
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },

  // Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
  },

  // Verification
  verification: {
    google: siteConfig.googleVerification,
    yandex: siteConfig.yandexVerification,
    other: {
      "msvalidate.01": siteConfig.bingVerification,
      "facebook-domain-verification": "your-facebook-domain-verification",
    },
  },

  // Category (for robots)
  category: "gaming",

  // Classification
  classification: "Business",

  // Referrer
  referrer: "origin-when-cross-origin",

  // Other useful meta
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "msapplication-TileColor": siteConfig.themeColor || "#191919",
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-config": "/browserconfig.xml",
    "og:country-name": "Bangladesh",
    "og:region": "BD",
    "og:postal-code": "1000",
    "og:locality": "Dhaka",
  },
};

// Helper function for dynamic page metadata
export function generatePageMetadata(
  title: string,
  description?: string,
  path?: string,
  image?: string,
): Metadata {
  const url = path ? `${siteConfig.url}${path}` : siteConfig.url;

  return {
    title: `${title} | ${siteConfig.name}`,
    description: description || siteConfig.description,
    alternates: {
      canonical: path || "/",
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: description || siteConfig.description,
      url: url,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      description: description || siteConfig.description,
      images: image ? [image] : undefined,
    },
  };
}

// Export siteConfig for use in components
export { siteConfig };
