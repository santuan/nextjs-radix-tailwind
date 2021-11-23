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
      <button
        className="px-6 py-3 font-mono text-xl font-normal leading-6 text-white uppercase bg-gray-900 rounded-md rounded-button"
      >
        Open Dialog
      </button>
    </DialogTrigger>
    <DialogContent className="flex items-center justify-center">
      <div className="fixed flex flex-col items-center justify-center w-full max-w-md px-3 py-32 mx-auto text-center transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg md:max-w-3xl lg:max-w-4xl sm:rounded-3xl left-1/2 top-1/2">
        <h2 className="mb-12 text-3xl font-medium font-title md:text-6xl">Are you absolutely sure?</h2>
        <p className="max-w-md px-2 mx-auto text-xl leading-8 ">This action cannot be undone. This will permanently delete your account and remove your data
        from our servers.</p>
        <div className="px-6 py-2 mt-8 font-mono text-2xl font-normal leading-6 uppercase tracking-button btn btn-primary ">
          Join us
        </div>
        <span className="font-mono text-sm font-bold">or click outside</span>

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
