import a from "@/styles/Home.module.css";
import s from "@/components/HoverCard/HoverCard.module.css";
import * as HoverCard from "@radix-ui/react-hover-card";
import { VscLinkExternal } from "react-icons/vsc";

const HomeTags = () => {
  return (
    <div className={a.tags}>
      <b className="mb-2 mr-3 font-mono text-sm text-gray-400 uppercase">made in</b>
      <HoverCard.Root openDelay={300} closeDelay={300}>
        <HoverCard.Trigger asChild>
          <span className="cursor-help">Next.js</span>
        </HoverCard.Trigger>
        <HoverCard.Content className={s.Content}>
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline space-x-2 font-mono text-xl font-bold leading-none text-indigo-600 hover:text-gray-900"
              >
                nextjs.org
                <VscLinkExternal className="ml-2 text-sm"/>
              </a>
            </div>
            <p className="mt-2 text-base">
              Next.js gives you the best developer experience with all the features you need for production: hybrid
              static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config
              needed.
            </p>
          </div>
          <HoverCard.Arrow className={s.Arrow} />
        </HoverCard.Content>
      </HoverCard.Root>
      <HoverCard.Root openDelay={300} closeDelay={300}>
        <HoverCard.Trigger asChild>
          <span className="cursor-help">CSS Modules</span>
        </HoverCard.Trigger>
        <HoverCard.Content className={s.Content}>
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <a
                href="https://github.com/css-modules/css-modules"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline space-x-2 font-mono text-xl font-bold leading-none text-indigo-600 hover:text-gray-900"
              >
                CSS Modules
                <VscLinkExternal className="ml-2 text-sm"/>
              </a>
            </div>
            <p className="mt-2 text-base">
              A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.
            </p>
          </div>
          <HoverCard.Arrow className={s.Arrow} />
        </HoverCard.Content>
      </HoverCard.Root>
      <HoverCard.Root openDelay={300} closeDelay={300}>
        <HoverCard.Trigger asChild>
          <span className="cursor-help">Typography</span>
        </HoverCard.Trigger>
        <HoverCard.Content className={s.Content}>
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <a
                href="https://github.com/tailwindlabs/tailwindcss-typography"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline space-x-2 font-mono text-xl font-bold leading-none text-indigo-600 hover:text-gray-900"
              >
                Tailwind Typography
                <VscLinkExternal className="ml-2 text-sm"/>
              </a>
            </div>
            <p className="mt-2 text-base">
              A plugin that provides a set of prose classes you can use to add beautiful typographic defaults to any
              vanilla HTML you don&apos;t control (like HTML rendered from Markdown, or pulled from a CMS).
            </p>
          </div>
          <HoverCard.Arrow className={s.Arrow} />
        </HoverCard.Content>
      </HoverCard.Root>
      <HoverCard.Root openDelay={300} closeDelay={300}>
        <HoverCard.Trigger asChild>
          <span className="cursor-help">React Icons</span>
        </HoverCard.Trigger>
        <HoverCard.Content className={s.Content}>
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <a
                href="https://react-icons.github.io/react-icons/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline space-x-2 font-mono text-xl font-bold leading-none text-indigo-600 hover:text-gray-900"
              >
                React Icons
                <VscLinkExternal className="ml-2 text-sm"/>
              </a>
            </div>
            <p className="mt-2 text-base">
              Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that
              allows you to include only the icons that your project is using.
            </p>
          </div>
          <HoverCard.Arrow className={s.Arrow} />
        </HoverCard.Content>
      </HoverCard.Root>
      <HoverCard.Root openDelay={300} closeDelay={300}>
        <HoverCard.Trigger asChild>
          <span className="cursor-help">Font Source</span>
        </HoverCard.Trigger>
        <HoverCard.Content className={s.Content}>
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <a
                href="https://fontsource.org/fonts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline space-x-2 font-mono text-xl font-bold leading-none text-indigo-600 hover:text-gray-900"
              >
                FontSource
                <VscLinkExternal className="ml-2 text-sm"/>
              </a>
            </div>
            <p className="mt-2 text-base">Self-host Open Source fonts in neatly bundled NPM packages.</p>
          </div>
          <HoverCard.Arrow className={s.Arrow} offset={10} />
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  );
};

export default HomeTags;
