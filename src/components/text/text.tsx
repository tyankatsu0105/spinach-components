import * as React from 'react'

export type TextProps = {
  text: string
}

export const Text = (props: TextProps) => <div>{props.text}</div>