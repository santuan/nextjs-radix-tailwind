import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsDot } from "react-icons/bs";
import Tabs from '../components/Tabs';
import Slider from '../components/Slider';
import Checkbox from '../components/Checkbox/Checkbox';
import Accordion from '../components/Accordion';
import Dialog from '../components/Dialog';
import HoverCard from '../components/HoverCard';
import ContextMenu from '../components/ContextMenu';
import Popover from '../components/Popover';
import ToggleGroup from '../components/ToggleGroup';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="my-2 text-3xl text-white font-title">
          <a className="underline duration-300 hover:text-gray-400" href="https://www.radix-ui.com/" target="_blank" rel="noopener noreferrer">
            Radix UI
          </a>
          {" "}&{" "}
          <a className="underline duration-300 hover:text-gray-400" href="https://www.radix-ui.com/https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
            Tailwind CSS
          </a>
        </h1>
        <div className={styles.tags}>
          <span>Next.js</span>
          <span>CSS Modules</span>
          <span>Keyboard Navigation</span>
          <span>Typography</span>
          <span>React Icons</span>
          <span>Font Source</span>
        </div>
        <div className="grid w-full px-6 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-9 max-w-7xl">
          <div className={styles.HomeItem}>
            <Accordion />
            <div className={styles.links}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.radix-ui.com/docs/primitives/components/accordion">
                Documentation
              </a>
              <BsDot />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/Accordion">
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <ContextMenu />
            <div className={styles.links}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.radix-ui.com/docs/primitives/components/accordion">
                Documentation
              </a>
              <BsDot />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/ContextMenu">
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <Dialog />
            <div className={styles.links}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.radix-ui.com/docs/primitives/components/dialog">
                Documentation
              </a>
              <BsDot />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/Dialog">
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <Slider />
            <div className={styles.links}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.radix-ui.com/docs/primitives/components/slider">
                Documentation
              </a>
              <BsDot />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/Slider">
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <Tabs />
            <div className={styles.links}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.radix-ui.com/docs/primitives/components/tabs">
                Documentation
              </a>
              <BsDot />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/Tabs">
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <HoverCard />
            <div className={styles.links}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.radix-ui.com/docs/primitives/components/hover-card">
                Documentation
              </a>
              <BsDot />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/HoverCard">
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <Checkbox />
            <div className={styles.links}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.radix-ui.com/docs/primitives/components/checkbox">
                Documentation
              </a>
              <BsDot />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/Checkbox">
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <Popover />
            <div className={styles.links}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.radix-ui.com/docs/primitives/components/popover">
                Documentation
              </a>
              <BsDot />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/Popover">
                See Template
              </a>
            </div>
          </div>
          <div className={styles.HomeItem}>
            <ToggleGroup />
            <div className={styles.links}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.radix-ui.com/docs/primitives/components/toggle-group">
                Documentation
              </a>
              <BsDot />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/santuan/nextjs-radix-tailwind/tree/main/components/ToggleGroup">
                See Template
              </a>
            </div>
          </div>
        </div>
      </main >
      <div className="flex items-center justify-center w-full py-24 font-mono text-white bg-gray-800">
        Thanks to all the libraries that made this possible.
      </div>

    </div >
  )
}

export default Home
