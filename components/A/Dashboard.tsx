import styles from "@/styles/Home.module.css";
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
import DropdownMenu from "@/components/DropdownMenu";
import ScrollAreaHorizontal from "@/components/ScrollArea/ScrollAreaHorizontal";

const Dashboard = () => {
  return (
    <div className="grid w-full px-6 mx-auto md:grid-cols-2 xl:grid-cols-3 gap-9 max-w-7xl">
      {CusttomComponents.map((item, i) => {
        return (
          <div key={i} className={`${styles.HomeItem} ${item.customClass}`}>
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
  );
};

export default Dashboard;


const CusttomComponents = [
  {
    title: "Accordion",
    slug: "accordion",
    customClass: "md:col-span-2",
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
    customClass: "!p-0 !pb-7 !justify-start ",
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
    customClass: '!p-0 !pb-7 !justify-start',
    component: <ScrollArea />,

  },
  {
    title: "ScrollAreaHorizontal",
    slug: "scroll-area",
    customClass: "md:col-span-2 !p-0 !pb-12",
    component: <ScrollAreaHorizontal />,
  },
  // {
  //   title: "DropdownMenu",
  //   slug: "dropdown-menu",
  //   customClass: "",
  //   component: <DropdownMenu />,
  // },
  // {
  //   title: "ContextMenu",
  //   slug: "context-menu",
  //   customClass: 'md:col-span-2',
  //   component: <ContextMenu />,
  // },
];
