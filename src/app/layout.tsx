import "/styles/bootstrap.min.css";
import "/styles/fontawesome.min.css";
import "/styles/animate.min.css";
import "/styles/flaticon.css";
import "/styles/boxicons.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";

// Global CSS
import "/styles/style.css";
import "/styles/responsive.css";

import localFont from 'next/font/local'
import type { Metadata } from "next";
import GoTop from "@/components/Shared/GoTop";
import AosAnimation from "@/components/Layout/AosAnimation";

const Aptos = localFont({
  src: [
    {
      path: './aptos-font/aptos.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './aptos-font/aptos-italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './aptos-font/aptos-bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './aptos-font/aptos-extrabold-italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.avanzaofess.com"),
  title: {
    default: "Avanza OFESS – Oilfield Equipment Supply & Services (UAE)",
    template: `%s | Avanza OFESS`,
  },
  description: "Avanza OFESS: Leading supplier of oilfield equipment in the UAE, specializing in Artificial Lift, Horizontal Pumping Systems, and ESP Workshop Solutions.",
  keywords: "avanza, avanza ofess, oilfield equipment, oilfield services, ESP solutions, artificial lift, horizontal pumping, ESP workshop, UAE, Dubai",
  authors: [{ name: "Avanza OFESS" }],
  viewport: "width=device-width, initial-scale=1.0",
  applicationName: "Avanza OFESS",
  openGraph: {
    title: "Avanza OFESS – Oilfield Equipment Supply & Services (UAE)",
    description: "Avanza OFESS: Leading supplier of oilfield equipment in the UAE, specializing in Artificial Lift, Horizontal Pumping Systems, and ESP Workshop Solutions.",
    url: "https://www.avanzaofess.com",
    siteName: "Avanza OFESS",
    locale: 'en_US',
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Avanza OFESS',
    'url': 'https://www.avanzaofess.com',
    'logo': 'https://www.avanzaofess.com/images/logo.png',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+971-55-123-4567', // Please replace with the actual phone number
      'contactType': 'customer service'
    }
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'url': 'https://www.avanzaofess.com',
    'name': 'Avanza OFESS',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://www.avanzaofess.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="en">
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={Aptos.className}>
        {children}

        <AosAnimation />

        <GoTop />
      </body>
    </html>
  );
}
