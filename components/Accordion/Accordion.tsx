import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@modulz/radix-icons';
import s from './Accordion.module.css';
export const Collapse = Accordion.Root;

const AccordionDemo = () => (
  <>
    <Collapse type="multiple" className={s.Container}>
      <Accordion.Item value="item-1" className={s.Item}>
        <Accordion.Header className={s.Header}>
          <Accordion.Trigger className={s.Trigger}>
            <span>Is it accessible?</span>
            <ChevronDownIcon aria-hidden className={s.Icon} />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={s.Content}>Yes. It adheres to the WAI-ARAI design pattern.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2" className={s.Item}>
        <Accordion.Header className={s.Header}>
          <Accordion.Trigger className={s.Trigger}>
            <span>Is it unstyled?</span>
            <ChevronDownIcon aria-hidden className={s.Icon} />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={s.Content}>Yes. It&apos;s unstyled by default, giving you freedom over the look and feel.

        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3" className={s.Item}>
        <Accordion.Header className={s.Header}>
          <Accordion.Trigger className={s.Trigger}>
            <span>Can it be animated?</span>
            <ChevronDownIcon aria-hidden className={s.Icon} />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={s.Content}>Yes! You can animate the Accordion with CSS or JavaScript.
        </Accordion.Content>
      </Accordion.Item>
    </Collapse>
  </>
);

export default AccordionDemo;