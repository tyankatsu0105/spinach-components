import * as React from 'react'

import { BaseProps } from "../../shared/types";

export type TextProps = BaseProps & {
  text: string;
}

export const Text = (props: TextProps) => <div>{props.text}{props.className}</div>