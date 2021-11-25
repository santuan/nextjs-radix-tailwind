import React from 'react';
import { styled } from '@stitches/react';
import s from './ScrollArea.module.css';
import { violet, mauve, blackA } from '@radix-ui/colors';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';


// Exports
const ScrollArea = ScrollAreaPrimitive.Root;
const ScrollAreaViewport = ScrollAreaPrimitive.Viewport;
const ScrollAreaScrollbar = ScrollAreaPrimitive.Scrollbar;
const ScrollAreaThumb = ScrollAreaPrimitive.Thumb;
const ScrollAreaCorner = ScrollAreaPrimitive.Corner;

// Your app...
const Box = styled('div', {});

const Text = styled('div', {
  color: violet.violet11,
  fontSize: 15,
  lineHeight: '18px',
  fontWeight: 500,
});

const Tag = styled('div', {
  color: mauve.mauve12,
  fontSize: 13,
  lineHeight: '18px',
  marginTop: 10,
  borderTop: `1px solid ${mauve.mauve6}`,
  paddingTop: 10,
});

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

const ScrollAreaDemo = () => (
  <ScrollArea className={s.ScrollArea}>
    <div className="p-3 text-2xl font-bold border-b border-gray-300 font-title">ScrollArea</div>
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
