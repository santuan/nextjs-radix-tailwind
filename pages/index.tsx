import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HomeTags from "@/components/A/HomeTags";
import DialogSandbox from "@/components/A/DialogSandbox";
import Dashboard from "@/components/A/Dashboard";
import TypographyArticle from "@/components/A/Typography";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RadixUI but with TailwindCSS</title>
        <meta name="description" content="Awesome Radix accessibility out of the box." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header
          className="top-0 left-0 right-0 z-50 flex flex-col items-center justify-between w-full px-6 py-3 bg-gray-900 md:flex-row bg-opacity-90"
          style={{ backdropFilter: "blur(5px)" }}
        >
          <h1 className="my-2 text-3xl text-white font-title">
            <a
              className="underline duration-300 hover:text-gray-400"
              href="https://www.radix-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Radix UI
            </a>{" "}
            with{" "}
            <a
              className="underline duration-300 hover:text-gray-400"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>
          </h1>
          <HomeTags />
        </header>
        <div className="flex-col hidden pt-24 my-6 font-sans text-center text-white lg:flex">
          <span>Awesome Radix accessibility out of the box.</span>
          <span>
            Press <code className="inline-flex px-1 mx-1 font-mono text-sm font-bold text-indigo-900 uppercase bg-indigo-100 rounded-md bg-opacity-80">Tab</code> on the
            Keyboard to start and{" "}

            <code className="inline-flex px-1 mx-1 font-mono text-sm font-bold text-indigo-900 uppercase bg-indigo-100 rounded-md bg-opacity-80">space</code>
            or
            <code className="inline-flex px-1 mx-1 font-mono text-sm font-bold text-indigo-900 uppercase bg-indigo-100 rounded-md bg-opacity-80">enter</code>

            to
            interact :)
          </span>
        </div>
        <Dashboard />

      </main>
      <div className="flex items-center justify-center w-full py-64 mb-24 bg-gray-900 bg-gradient-to-br from-gray-600 to-gray-800">
        <DialogSandbox />
      </div>
      <TypographyArticle />


      <div className="flex flex-col items-center justify-center w-full py-24 mt-24 font-mono text-white bg-gray-800">
        <p>Thanks to all the libraries that made this possible.</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/santuan/nextjs-radix-tailwind"
          className="mt-2 font-bold"
        >
          Github repo
        </a>
      </div>
    </div>
  );
};

export default Home;





