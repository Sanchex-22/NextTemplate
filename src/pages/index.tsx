import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/ui_components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main
        className={`flex min-h-screen w/ flex-col items-center justify-between px-12 py-2 ${inter.className}`}
      >
        <div className="bg-black/50 rounded-md h-96 w-full">

        </div>

        <section className="flex gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

        </section>
      </main>
    </Layout>
  );
}
