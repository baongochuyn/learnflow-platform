import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Box } from "@mui/material";
import "./globals.css";

import { AuthProvider } from "@/context/AuthContext";
import { Providers } from "./providers";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LearnFlow",
  description: "Learning platform UI",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <Providers>
          <AuthProvider>
            <Navbar />
            <Box component="main" sx={{ flex: 1, bgcolor: "#020817" }}>
              {children}
            </Box>
            <Footer />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
