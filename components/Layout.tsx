import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { VFC } from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const Layout: VFC<Props> = (props) => {
  const { children, title = "Home Page" } = props;
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen flex items-center justify-center gap-10 h-14 text-white">
          <Link href="/">HOME</Link>
          <Link href="/blog-page">BLOG</Link>
          <Link href="/contact-page">CONTACT</Link>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-screen py-6 border-t flex items-center justify-center gap-5">
        by niihara megumu
        <Image
          src="/vercel.svg"
          alt="vercel log"
          className="h-4"
          width={50}
          height={50}
        />
      </footer>
    </div>
  );
};
