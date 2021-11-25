import React from 'react';
import s from './ScrollArea.module.css';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

// Exports
const ScrollArea = ScrollAreaPrimitive.Root;
const ScrollAreaViewport = ScrollAreaPrimitive.Viewport;
const ScrollAreaScrollbar = ScrollAreaPrimitive.Scrollbar;
const ScrollAreaThumb = ScrollAreaPrimitive.Thumb;
const ScrollAreaCorner = ScrollAreaPrimitive.Corner;

const ScrollAreaHorizontalDemo = () => (
  <ScrollArea className={s.ScrollArea} >
    <div className="p-3 text-xl font-bold border-b border-gray-300 font-title">ScrollAreaHorizontal</div>
    <ScrollAreaViewport className={s.ScrollAreaViewport}>
      <div className="flex p-3">
        {TAGS.map((tag) => (
          <div className="w-40 h-40 p-3 mr-6 font-mono leading-none duration-500 bg-indigo-100 shadow-lg hover:shadow-2xl" key={tag}>{tag}</div>
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

export default ScrollAreaHorizontalDemo;

const TAGS = Array.from({ length: 10 }).map((_, i, a) => `List.${a.length - i}`);
