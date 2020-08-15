# Spinach Components

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

### Why does specify `incremental: false` at rollup.config.js?

To avoid below error when running `rollup -c`

```bash
[!] (plugin typescript) Error: @rollup/plugin-typescript: 'dir' must be used when 'tsBuildInfoFile' or 'incremental' are specified.
```
