# Spinach Components

[![Current version](https://badge.fury.io/js/spinach-components.svg?style=flat)](https://badge.fury.io/js/spinach-components)
[![deploy](https://img.shields.io/badge/deploy-🛳%20Ship.js-blue?style=flat)](https://github.com/algolia/shipjs)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](https://opensource.org/licenses/MIT)

## Usage

```bash
npm i spinach-components
```

```tsx
import * as React from "react";
import * as SpinachComponents from "spinach-components";

export const Component = () => (
  <SpinachComponents.Box>
    <SpinachComponents.Text text="text" />
  </SpinachComponents.Box>
);
```

## FAQ

### What's npm script `declaration-build`?

There is an issue.  
https://github.com/rollup/plugins/issues/287