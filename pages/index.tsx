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
import ScrollArea from "@/components/ScrollArea";
import ScrollAreaHorizontal from "@/components/ScrollArea/ScrollAreaHorizontal";
import HomeTags from "@/components/A/HomeTags";
import DialogSandbox from "@/components/A/DialogSandbox";

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
        <div className="grid w-full px-6 mx-auto md:grid-cols-2 xl:grid-cols-3 gap-9 max-w-7xl">
          {Roadmap.map((item, i) => {
            return (
              <div key={i}  className={`${styles.HomeItem} ${item.customClass}`}>
                {item.component}
                <div className={styles.links}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.radix-ui.com/docs/primitives/components/${item.slug}`}
                  >
                    Documentation
                  </a>
                  <BsDot />
                  <p>{item.title}</p>
                  <BsDot />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/${item.title}`}
                  >
                    See Template
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <div className="flex items-center justify-center w-full py-24 mb-24 bg-gray-900 bg-gradient-to-br from-gray-600 to-gray-800">
        <DialogSandbox />
      </div>
      <article className={styles.typography}>
        <div className="relative mt-12">
          <div className="block w-full text-xl not-italic font-title">
            Typography should be easy. {" "}
            <a
              href="https://github.com/tailwindlabs/tailwindcss-typography"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-gray-900"
            >
              Tailwind Typography
            </a>
            {" "}
            and
            {" "}
            <a
              href="https://fontsource.org/fonts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-gray-900"
            >
              Fontsource
            </a>
          </div>
          <h2 className={styles.butterfly}>Ants and butterflies</h2>
        </div>
        <div>
          <p>
            An idea to establish the possible paths for the design of fonts. The &quot;typographic
            ants&quot; are in charge of the painstaking and laborious task of making a text legible, a very useful work,
            but imperceptible to the eyes of the reader. On the other hand, the display of &quot;typographic
            butterflies&quot; deliberately manifests their fullness and forms on a large scale.
          </p>
          <b>by Luis Siquot</b>
        </div>
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



const Roadmap = [
  {
    title: "Accordion",
    slug: "accordion",
    customClass: "col-span-2",
    component: <Accordion />,
  },
  {
    title: "Dialog",
    slug: "dialog",
    customClass: '',
    component: <Dialog />,
  },
  {
    title: "Tabs",
    slug: "tabs",
    customClass: "h-64",
    component: <Tabs />,
  },
  {
    title: "Slider",
    slug: "slider",
    customClass: '',
    component: <Slider />,
  },

  {
    title: "HoverCard",
    slug: "hover-card",
    customClass: '',
    component: <HoverCard />,

  },
  {
    title: "Checkbox",
    slug: "checkbox",
    customClass: 'h-64',
    component: <Checkbox />,

  },
  {
    title: "Popover",
    slug: "popover",
    customClass: '',
    component: <Popover />,

  },
  {
    title: "ToggleGroup",
    slug: "toggle-group",
    customClass: '',
    component: <ToggleGroup />,

  },
  {
    title: "ScrollArea",
    slug: "scroll-area",
    customClass: '!p-0 !pb-7',
    component: <ScrollArea />,

  },
  {
    title: "ScrollAreaHorizontal",
    slug: "scroll-area",
    customClass: "col-span-2 !p-0 !pb-12",
    component: <ScrollAreaHorizontal />,

  },
];


