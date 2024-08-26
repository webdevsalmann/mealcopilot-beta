import "./globals.css";
import { Inter, Lato, Poppins } from "next/font/google";
import { siteMd } from "@/lib/datas/metadatas";
import Navbar from "@/components/layouts/navbar/navbar";
import Footer from "@/components/layouts/footer/footer";
import Providers from "@/components/providers/providers";

const inter = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = siteMd;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="w-full min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-1">
              {children}
            </div>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
