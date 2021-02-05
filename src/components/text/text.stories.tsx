import * as React from 'react';

import { Story } from '@storybook/react/types-6-0';
import { filename } from "paths.macro";

import { storybookMeta } from "../../shared/helpers";

import * as Text from "./text";
type Props = React.PropsWithChildren<Text.Props>

export default storybookMeta(filename, { component: Text.Component });

const Template: Story<Props> = (args) => <Text.Component size={args.size} as={args.as}>{args.children}</Text.Component>;

export const Primary = Template.bind({});
const primaryProps: Props = {
  as: 'h1',
  size: 'h1',
  children: 'text'
}
Primary.args = primaryProps;