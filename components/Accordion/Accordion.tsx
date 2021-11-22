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
            <span>Trigger text</span>
            <ChevronDownIcon aria-hidden className={s.Icon}/>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={s.Content}>asd</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2" className={s.Item}>
        <Accordion.Header className={s.Header}>
          <Accordion.Trigger className={s.Trigger}>
            <span>Trigger text2</span>
            <ChevronDownIcon aria-hidden className={s.Icon}/>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={s.Content}>asd22222222222</Accordion.Content>
      </Accordion.Item>
    </Collapse>
  </>
);

export default AccordionDemo;