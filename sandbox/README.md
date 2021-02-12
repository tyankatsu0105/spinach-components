You can check dist at this directory.

```bash
npm run build

touch sandbox/index.tsx
```

```tsx
import * as SpinachComponnets from "../dist";

export const Component = () => (
  <SpinachComponnets.Text
    textSize="h1"
  >text</SpinachComponnets.Text>
);
```