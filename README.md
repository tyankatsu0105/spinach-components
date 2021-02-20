# Spinach Components

[![Current version](https://badge.fury.io/js/spinach-components.svg?style=flat)](https://badge.fury.io/js/spinach-components)
[![deploy](https://img.shields.io/badge/deploy-🛳%20Ship.js-blue?style=flat)](https://github.com/algolia/shipjs)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](https://opensource.org/licenses/MIT)

## Usage

```bash
npm i spinach-components
```

```tsx
import * as React from 'react';
import * as SpinachComponents from 'spinach-components';

export const Component = () => (
  <SpinachComponnets.Text textSize="h1">text</SpinachComponnets.Text>
);
```

## FAQ

### What's npm script `declaration-build`?

There is an issue.  
https://github.com/rollup/plugins/issues/287

### Why do not use path alias?

type becomes any, if use path alias.
I don't know this happen

```tsx
// text.tsx
import { BaseProps } from '~shared/types';

export TextProps = BaseProps & {
  text: string
}
```

```tsx
// text.stories.tsx
import { TextProps } from './text';
// type TextProps = any ←!?!?!?!?
```
