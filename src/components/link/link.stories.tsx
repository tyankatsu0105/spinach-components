import * as React from 'react';
import * as ReactRouterDom from 'react-router-dom';

import { Story } from '@storybook/react/types-6-0';
import { filename } from 'paths.macro';

import { storybookMeta } from '../../shared/helpers';

import * as Link from './link';
import * as Text from '../text';
type Props = React.ComponentProps<typeof Link.Component>;

export default storybookMeta(filename, {
  component: Link.Component,
  argTypes: {
    textSize: {
      control: { type: 'select', options: Object.keys(Text.sizeMap) },
    },
    href: { control: 'text' },
    children: { control: 'text' },
  },
});

const Template: Story<Props> = (args) => (
  <Link.Component {...args}>{args.children}</Link.Component>
);

export const Normal = Template.bind({});
const normalProps: Props = {
  children: 'text',
  textSize: 'body',
  href: 'https://example.com',
};
Normal.args = normalProps;

export const InjectedComponent = Template.bind({});
const injectedComponentProps: Props = {
  children: 'text',
  textSize: 'body',
  component: ReactRouterDom.NavLink,
  to: 'https://example.com',
};
InjectedComponent.args = injectedComponentProps;
