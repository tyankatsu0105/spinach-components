import * as React from 'react';

import { Story } from '@storybook/react/types-6-0';
import { filename } from "paths.macro";

import { storybookMeta } from "../../shared/helpers";

import * as Component from './text';

export default storybookMeta(filename)

const Template: Story<Component.TextProps> = (args) => <Component.Text {...args} />;

export const Primary = Template.bind({});
const primaryProps: Component.TextProps = {
  text: 'abc',
  className: 'a'
}
Primary.args = primaryProps;