import * as React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import * as Component from './text';


export default {
  title: 'Text',
  component: Component.Text
} as Meta;

const Template: Story<Component.TextProps> = (args) => <Component.Text {...args} />;

export const Primary = Template.bind({});
const primaryProps: Component.TextProps = {
  text: 'abc'
}
Primary.args = primaryProps;