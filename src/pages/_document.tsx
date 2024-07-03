import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/ui_components/navbar";
import Footer from "@/components/ui_components/footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
