<h2>Motivation</h2>
Play with vitest including testing-library/react for next.js


<h2>Setup</h2>

<h3>cmd at project root</h3>

```
npm i -D @testing-library/jest-dom @testing-library/react @vitejs/plugin-react jsdom
```

<h3>package.json scripts</h3>

```json
    "test": "vitest"
```

<h3>vite.config.ts on project root</h3>


```typescript
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '__tests__/setup.ts',
  },
  plugins: [react()],
} );
```


<h3>setup.ts in __test__</h3>

```typescript
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
 cleanup();
});
```


<h3>logic.test.ts</h3>
import { expect, test } from "vitest";
import { sum } from "src/logic/utils";

test("1+2 is 3", () => {
  expect(sum(1, 2)).toBe(3);
});


<h3>home.test.tsx</h3>

```typescript
import { describe, expect, it }  from  "vitest";
 import { render, screen }  from  "@testing-library/react";
import Home from "../pages/index"

 describe( "Home",  () => {
   it( "it should be rendered",  () => {
     render( < Home />);
     expect(screen. getByText( "Hello")). toBeInTheDocument();
  });
});

```