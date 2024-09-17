"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, Zap, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Ensure we are running this on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isClient && url) {
      // Redirect to the bot page with the article URL as a query parameter
      router.push(`/${url}`);
    }
  };
  return (
    <div className="flex flex-col min-h-screen bg-black relative items-between mx-auto">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 mr-2" />
          <span className="font-bold">Qurl</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Get Instant Answers from Any Article
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Unlock the power of knowledge with Qurl. Ask questions about
                  any article and get accurate answers instantly.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2" onSubmit={handleSubmit}>
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter article URL"
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                  />
                  <Button type="submit">Query</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Search className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Instant Answers</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Get immediate responses to your questions about any article.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Zap className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">AI-Powered</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Utilizes advanced AI to understand context and provide
                  accurate answers.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <MessageSquare className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Natural Language</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ask questions in plain English and get human-like responses.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="how-it-works">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How It Works
            </h2>
            <ol className="grid gap-6 md:grid-cols-3">
              <li className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <span className="text-2xl font-bold">1</span>
                <h3 className="text-xl font-bold">Enter Article URL</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Paste the URL of any article you want to query.
                </p>
              </li>
              <li className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <span className="text-2xl font-bold">2</span>
                <h3 className="text-xl font-bold">Ask Your Question</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Type your question about the article in natural language.
                </p>
              </li>
              <li className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <span className="text-2xl font-bold">3</span>
                <h3 className="text-xl font-bold">Get Instant Answer</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Receive an accurate answer based on the article&apos;s
                  content.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section
          className="w-full py-8 md:py-24 lg:py-32 bg-blue-900"
          id="pricing"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="-mt-6">
                <h2 className="text-3xl pb-4 font-bold tracking-tighter sm:text-5xl">
                  $0
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Enjoy our service completely free of charge. No credit card
                  required.
                </p>
              </div>
              <Link href={"/"}>
                <Button
                  className="w-full max-w-sm font-bold text-base font-sans tracking-wider"
                  size="lg"
                >
                  Start Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 Qurl. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://github.com/mhmumer/"
          >
            Github
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://mutecx.vercel.app/"
          >
            Mutecx
          </Link>
        </nav>
      </footer>
    </div>
  );
}
