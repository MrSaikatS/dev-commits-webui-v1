import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/system";
import Layout from "@/components/Layout";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
            <Toaster />
          </Layout>
        </NextUIProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  );
}
