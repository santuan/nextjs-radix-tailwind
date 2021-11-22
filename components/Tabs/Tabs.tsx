import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import s from './Tabs.module.css';

const TabsDemo = () => (
  <>
    <Tabs.Root className={s.Root} defaultValue="account">
      <Tabs.List className={s.List} aria-label="tabs example">
        <Tabs.Trigger value="account" className={s.Trigger}>Account</Tabs.Trigger>
        <Tabs.Trigger value="pass" className={s.Trigger}>Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account" className={s.Content}>
        tab 1
      </Tabs.Content>
      <Tabs.Content value="pass" className={s.Content}>
        tab 2
      </Tabs.Content>
    </Tabs.Root>
  </>
);

export default TabsDemo;