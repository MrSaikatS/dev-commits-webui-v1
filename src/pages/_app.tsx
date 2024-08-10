import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/system";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <Component {...pageProps} />
        <Toaster />
      </NextUIProvider>
    </QueryClientProvider>
  );
}
