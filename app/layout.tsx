import { Geist, Lato, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/Header";
import { ThemeProvider } from "../providers/theme-provider";
import Footer from "../components/shared/footer/Footer";
// One line to import and export metadata
export { metadata } from "../components/metaData/metadata";

// Configure Lato (with multiple weights)
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

// Configure Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.variable} ${inter.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
