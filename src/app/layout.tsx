import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: {
    default: "REFLET - Réseau des Femmes Leaders autour de Thierno",
    template: "%s | REFLET"
  },
  description: "Réseau des Femmes Leaders autour de Thierno Amadou BA. Excellence et leadership féminin au Sénégal. Formation, mentorat et développement professionnel pour les femmes.",
  keywords: [
    "REFLET",
    "femmes leaders",
    "leadership féminin",
    "Sénégal",
    "Thierno Amadou BA",
    "formation",
    "mentorat",
    "développement professionnel",
    "Bambilor",
    "réseau",
    "empowerment",
    "entrepreneuriat féminin"
  ],
  authors: [{ name: "REFLET" }],
  creator: "REFLET",
  publisher: "REFLET",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://reseaureflet.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://reseaureflet.com",
    title: "REFLET - Réseau des Femmes Leaders autour de Thierno",
    description: "Réseau des Femmes Leaders autour de Thierno Amadou BA. Excellence et leadership féminin au Sénégal.",
    siteName: "REFLET",
    images: [
      {
        url: "/images/og-image-reflet.jpg",
        width: 1200,
        height: 630,
        alt: "REFLET - Réseau des Femmes Leaders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REFLET - Réseau des Femmes Leaders autour de Thierno",
    description: "Réseau des Femmes Leaders autour de Thierno Amadou BA. Excellence et leadership féminin au Sénégal.",
    images: ["/images/og-image-reflet.jpg"],
    creator: "@reseaureflet",
    site: "@reseaureflet",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}