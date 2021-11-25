import * as DialogPrimitive from "@radix-ui/react-dialog";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from 'react';

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



export default function ConnectWalletHeader() {
  const [Spinner, setSpinner] = useState(false);
  useEffect(() => setSpinner(true), []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-6 py-3 font-mono text-xl font-normal leading-6 text-white uppercase duration-300 bg-gray-900 border-4 border-transparent rounded-md hover:bg-indigo-900 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600">
          View Sandbox in a Dialog
        </button>
      </DialogTrigger>
      <DialogContent className="flex items-center justify-center">
        {Spinner ? (
          <div className="fixed z-50 w-4 h-4 p-5 m-1 overflow-hidden bg-indigo-500 rounded-full left-2 top-2 animate-pulse" />
        ) : null}
        
        <div className="fixed inset-0 flex flex-col items-center justify-center w-full mx-auto text-center transform bg-gray-900 bg-opacity-90">
          <iframe src="https://codesandbox.io/embed/github/santuan/nextjs-radix-tailwind/tree/main/?autoresize=0&fontsize=13&hidenavigation=0&module=%2Fcomponents%2FAccordion%2FAccordion.tsx&theme=dark&view=editor"
            className="w-full min-h-screen mx-auto overflow-hidden border-0 md:p-20"
            title="rough-smoke-tco68"
            loading="lazy"
            onLoad={() => setSpinner(false)}
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </div>
        <DialogClose asChild>
          <button className="fixed top-0 right-0 flex flex-col items-center justify-center p-3 text-gray-100 duration-500 bg-gray-900 bg-opacity-50 outline-none cursor-pointer lg:p-6 hover:bg-opacity-100 lg:bg-transparent lg:hover:opacity-30">
            <AiOutlineClose className="text-3xl " />
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

