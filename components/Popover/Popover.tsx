import React from 'react';
import { VscSettings } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import * as Popover from '@radix-ui/react-popover';
import s from './Popover.module.css';

const PopoverDemo = () => (
  <div className={s.Container}>
    <Popover.Root >
      <Popover.Trigger asChild>
        <button className={s.TriggerIcon} aria-label="Update dimensions">
          <VscSettings />
        </button>
      </Popover.Trigger>
      <Popover.Content className={s.Content} >
        <div className="flex flex-col p-2">
          <div className="mb-2 font-bold">
            Dimensions
          </div>
          <fieldset>
            <label htmlFor="width">Width</label>
            <input id="width" defaultValue="100%" />
          </fieldset>
          <fieldset>
            <label htmlFor="maxWidth">Max. width</label>
            <input id="maxWidth" defaultValue="300px" />
          </fieldset>
          <fieldset>
            <label htmlFor="height">Height</label>
            <input id="height" defaultValue="25px" />
          </fieldset>
          <fieldset>
            <label htmlFor="maxHeight">Max. height</label>
            <input id="maxHeight" defaultValue="none" />
          </fieldset>
        </div>
        <Popover.Arrow className={s.Arrow} />
        <Popover.Close className={s.Close} aria-label="Close">
          <GrClose className="text-sm"/>
        </Popover.Close>
      </Popover.Content>
    </Popover.Root>
  </div>
);

export default PopoverDemo;
