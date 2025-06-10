/* import type { Metadata } from "next"; */
import { Rubik } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { getLocalBusinessSchema, seo } from "@/utils/seo";
import { Metadata } from "next";

const rubik = Rubik({
  variable: "--font-rubik",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  ...seo,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
      </head>
      <body className={`${rubik.variable} w-full overflow-x-hidden`}>
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
