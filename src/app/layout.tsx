import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PERSONAL } from "@/data";

const BASE_URL = "https://pijushmanna.github.io/android-consultant-portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${PERSONAL.name} – Senior Android Consultant`,
    template: `%s | ${PERSONAL.name}`,
  },
  description:
    "Senior Android Consultant specializing in Kotlin, Jetpack Compose, Firebase, Clean Architecture, and Play Store publishing. 7+ years of experience building apps for 130M+ users.",
  keywords: [
    "Android Consultant",
    "Kotlin Developer",
    "Jetpack Compose",
    "Android App Development",
    "Firebase Integration",
    "Android Architecture",
    "Mobile Developer India",
    "Android MVP Development",
    "Clean Architecture Android",
    "MVVM Android",
    "MVI Android",
    "Android Performance Optimization",
    "Freelance Android Developer",
    "Senior Android Engineer",
    "Pijush Manna",
  ],
  authors: [{ name: PERSONAL.name, url: BASE_URL }],
  creator: PERSONAL.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: `${PERSONAL.name} – Android Consultant`,
    title: `${PERSONAL.name} – Senior Android Consultant`,
    description:
      "Building scalable Android applications with Kotlin, Jetpack Compose, Firebase, and modern architecture. 7+ years · 130M+ users impacted.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${PERSONAL.name} – Senior Android Consultant`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL.name} – Senior Android Consultant`,
    description:
      "Building scalable Android applications with Kotlin, Jetpack Compose, Firebase, and modern architecture.",
    creator: "@bong_pijush",
    images: [`${BASE_URL}/og-image.png`],
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
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: PERSONAL.name,
              jobTitle: "Senior Android Consultant",
              url: BASE_URL,
              sameAs: [
                PERSONAL.github,
                PERSONAL.linkedin,
                PERSONAL.twitter,
              ],
              knowsAbout: [
                "Android Development",
                "Kotlin",
                "Jetpack Compose",
                "Firebase",
                "Mobile Architecture",
                "MVVM",
                "Clean Architecture",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Consulting",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bengaluru",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className="bg-background text-white antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
