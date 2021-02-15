import * as React from 'react';
import * as ReactRouterDom from 'react-router-dom';

import { Story } from '@storybook/react/types-6-0';
import { filename } from 'paths.macro';

import { storybookMeta } from '../../shared/helpers';

import * as Text from './text';
type Props = React.ComponentProps<typeof Text.Component>;

export default storybookMeta(
  {
    filename,
    group: 'Components',
  },
  {
    component: Text.Component,
    argTypes: {
      textSize: {
        control: { type: 'select', options: Object.keys(Text.sizeMap) },
      },
      children: { control: 'text' },
    },
  }
);

const Template: Story<Props> = (args) => (
  <Text.Component {...args}>{args.children}</Text.Component>
);

export const Normal = Template.bind({});
const normalProps: Props = {
  children: 'text',
  textSize: 'body',
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
