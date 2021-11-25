import React from 'react';
import { styled } from '@stitches/react';
import s from './ScrollArea.module.css';
import { violet, mauve, blackA } from '@radix-ui/colors';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

// Exports
export const ScrollArea = ScrollAreaPrimitive.Root;
export const ScrollAreaViewport = ScrollAreaPrimitive.Viewport;
export const ScrollAreaScrollbar = ScrollAreaPrimitive.Scrollbar;
export const ScrollAreaThumb = ScrollAreaPrimitive.Thumb;
export const ScrollAreaCorner = ScrollAreaPrimitive.Corner;

const ScrollAreaDemo = () => (
  <ScrollArea className={s.ScrollArea}>
    <div className="p-3 text-xl font-bold border-b border-gray-300 font-title">ScrollArea</div>
    <ScrollAreaViewport className={s.ScrollAreaViewport}>
      <div className="px-3">
        {TAGS.map((tag) => (
          <div className="py-3 font-mono leading-none duration-500 shadow hover:shadow-xl" key={tag}>{tag}</div>
        ))}
      </div>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar className={s.ScrollAreaScrollbar} orientation="vertical">
      <ScrollAreaThumb className={s.ScrollAreaThumb} />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar className={s.ScrollAreaScrollbar} orientation="horizontal">
      <ScrollAreaThumb className={s.ScrollAreaThumb} />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner className={s.ScrollAreaCorner} />
  </ScrollArea>
);

export default ScrollAreaDemo;

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `List.${a.length - i}`);
