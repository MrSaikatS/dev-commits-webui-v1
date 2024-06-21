import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/system";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
          <Toaster
            richColors
            expand={true}
            position="bottom-right"
          />
        </Layout>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
