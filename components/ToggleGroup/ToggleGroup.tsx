import React from 'react';
import s from './ToggleGroup.module.css';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import {
  BsTextLeft,
  BsTextCenter,
  BsTextRight
} from "react-icons/bs";

// Exports
const ToggleGroup = ToggleGroupPrimitive.Root;
const ToggleGroupItem = ToggleGroupPrimitive.Item;

// Your app...
const ToggleGroupDemo = () => (
  <ToggleGroup className={s.ToggleGroup} type="single" defaultValue="center" aria-label="Text alignment">
    <ToggleGroupItem className={s.ToggleGroupItem} value="left" aria-label="Left aligned">
      <BsTextLeft />
    </ToggleGroupItem>
    <ToggleGroupItem className={s.ToggleGroupItem} value="center" aria-label="Center aligned">
      <BsTextCenter />
    </ToggleGroupItem>
    <ToggleGroupItem className={s.ToggleGroupItem} value="right" aria-label="Right aligned">
      <BsTextRight />
    </ToggleGroupItem>
  </ToggleGroup>
);

export default ToggleGroupDemo;
