import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import TopBanner from "@/components/TopBanner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <TopBanner />
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
