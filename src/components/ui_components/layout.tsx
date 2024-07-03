import Head from "next/head";
import { PropsWithChildren } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: PropsWithChildren){
    return(
        <>
        <Head>
          <title>NextPractice</title>
          <meta name="description" content="Practicando Nextjs" />
        </Head>
        <Navbar />
        {children}
        <Footer />
      </>
    )
}