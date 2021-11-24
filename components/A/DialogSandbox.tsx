import * as DialogPrimitive from "@radix-ui/react-dialog";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Root({ children, ...props }) {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledOverlay className="overlay" />
      {children}
    </DialogPrimitive.Root>
  );
}
// Exports
const Dialog = Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogContent = DialogPrimitive.Content;
const DialogClose = DialogPrimitive.Close;
const StyledOverlay = DialogPrimitive.Overlay;

const ConnectWalletHeader = () => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="px-6 py-3 font-mono text-xl font-normal leading-6 text-white uppercase duration-300 bg-gray-900 border-4 border-transparent rounded-md focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600">
        View Sandbox in a Dialog
      </button>
    </DialogTrigger>
    <DialogContent className="flex items-center justify-center">
      <div className="fixed flex flex-col items-center justify-center w-full mx-auto text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <iframe src="https://codesandbox.io/embed/github/santuan/nextjs-radix-tailwind/tree/main/?autoresize=1&fontsize=13&hidenavigation=1&module=%2Fcomponents%2FAccordion%2FAccordion.tsx&theme=dark&view=editor"
          className="w-full px-4 mx-auto overflow-hidden border-0 max-w-7xl"
          style={{height: '660px'}}
          title="rough-smoke-tco68"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
      <DialogClose asChild>
        <button className="fixed top-0 right-0 flex flex-col items-center justify-center p-3 text-gray-100 duration-500 bg-gray-900 bg-opacity-50 outline-none cursor-pointer lg:p-6 hover:bg-opacity-100 lg:bg-transparent lg:hover:opacity-30">
          <AiOutlineClose className="text-3xl " />
          <span className="hidden font-mono md:block">esc</span>
        </button>
      </DialogClose>
    </DialogContent>
  </Dialog>
);

export default ConnectWalletHeader;
