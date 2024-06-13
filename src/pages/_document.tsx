import { Html, Head, Main, NextScript } from "next/document";
import { Toaster } from "sonner";

export default function Document() {
  return (
    <Html
      lang="en"
      className="">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Toaster />
      </body>
    </Html>
  );
}
