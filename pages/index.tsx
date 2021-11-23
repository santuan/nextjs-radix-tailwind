import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { BsDot } from "react-icons/bs";
import Tabs from "@/components/Tabs";
import Slider from "@/components/Slider";
import Checkbox from "@/components/Checkbox/Checkbox";
import Accordion from "@/components/Accordion";
import Dialog from "@/components/Dialog";
import HoverCard from "@/components/HoverCard";
import ContextMenu from "@/components/ContextMenu";
import Popover from "@/components/Popover";
import ToggleGroup from "@/components/ToggleGroup";
import HomeTags from "@/components/A/HomeTags";

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
          className="top-0 left-0 right-0 z-50 flex flex-col items-center justify-between w-full px-6 py-3 bg-gray-900 md:flex-row lg:fixed bg-opacity-90"
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
        <div className="grid w-full px-6 mx-auto md:grid-cols-2 xl:grid-cols-3 gap-9 max-w-7xl">
          <div className={styles.HomeItem}>
            <Accordion />
            <div className={styles.links}>
              <p>Accordion</p>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.radix-ui.com/docs/primitives/components/accordion"
              >
                Documentation
              </a>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/Accordion"
              >
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <ContextMenu />
            <span className="lg:hidden">Desktop only</span>
            <div className={styles.links}>
              <p>ContextMenu</p>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.radix-ui.com/docs/primitives/components/accordion"
              >
                Documentation
              </a>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/ContextMenu"
              >
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <Dialog />
            <div className={styles.links}>
              <p>Dialog</p>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.radix-ui.com/docs/primitives/components/dialog"
              >
                Documentation
              </a>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/Dialog"
              >
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <Slider />
            <div className={styles.links}>
              <p>Slider</p>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.radix-ui.com/docs/primitives/components/slider"
              >
                Documentation
              </a>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/Slider"
              >
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <Tabs />
            <div className={styles.links}>
              <p>Tabs</p>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.radix-ui.com/docs/primitives/components/tabs"
              >
                Documentation
              </a>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/Tabs"
              >
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <HoverCard />
            <div className={styles.links}>
              <p>HoverCard</p>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.radix-ui.com/docs/primitives/components/hover-card"
              >
                Documentation
              </a>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/HoverCard"
              >
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <Checkbox />
            <div className={styles.links}>
              <p>Checkbox</p>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.radix-ui.com/docs/primitives/components/checkbox"
              >
                Documentation
              </a>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/Checkbox"
              >
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <Popover />
            <div className={styles.links}>
              <p>Popover</p>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.radix-ui.com/docs/primitives/components/popover"
              >
                Documentation
              </a>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/Popover"
              >
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <ToggleGroup />
            <div className={styles.links}>
              <p>Toggle Group</p>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.radix-ui.com/docs/primitives/components/toggle-group"
              >
                Documentation
              </a>
              <BsDot />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/ToggleGroup"
              >
                See Template
              </a>
            </div>
          </div>
        </div>
      </main>
      <article className={styles.typography}>
        <a
          href="https://github.com/tailwindlabs/tailwindcss-typography"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xl font-bold text-indigo-600 hover:text-gray-900"
        >
          Tailwind Typography
        </a>
        <h3>Typography should be easy</h3>
        <blockquote>
          <p>
            Ants and butterflies. An idea to establish the possible paths for the design of fonts. The &quot;typographic
            ants&quot; are in charge of the painstaking and laborious task of making a text legible, a very useful work,
            but imperceptible to the eyes of the reader. On the other hand, the display of &quot;typographic
            butterflies&quot; deliberately manifests their fullness and forms on a large scale.
          </p>
          <p>An idea by Luis Siquot</p>
        </blockquote>
      </article>
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
