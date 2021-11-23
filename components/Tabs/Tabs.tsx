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
        Make changes to your account here. Click save when you&apos;re done.
      </Tabs.Content>
      <Tabs.Content value="pass" className={s.Content}>
        Change your password here. After saving, you&apos;ll be logged out.
      </Tabs.Content>
    </Tabs.Root>
  </>
);

export default TabsDemo;