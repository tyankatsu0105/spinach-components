import * as React from 'react'

import { BaseProps } from "../../shared/types";

export type BoxProps = BaseProps;

export const Box = (props: BoxProps) => <div>{props.children}</div>