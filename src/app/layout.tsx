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
  title:
    "AVANZA - AVANZA OILFIELD EQUIPMENT SUPPLIES & SERVICES",
  description:
    "AVANZA - AVANZA OILFIELD EQUIPMENT SUPPLIES & SERVICES - Website build by Vivek Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Aptos.className}>
        {children}

        <AosAnimation />

        <GoTop />
      </body>
    </html>
  );
}
