![title](media/repo-header.svg)

<p align="center">
<a href="https://github.com/react-earth/react-happy-global-state"><img alt="star" src="https://img.shields.io/github/stars/react-earth/react-happy-global-state.svg?style=social&label=Star" /></a>
<a href="https://www.npmjs.com/package/react-happy-global-state"><img src="https://img.shields.io/npm/v/react-happy-global-state" alt="version"></a>
<a href="https://www.npmjs.com/package/react-happy-global-state"><img alt="minzip" src="https://img.badgesize.io/https:/unpkg.com/react-happy-global-state@latest/dist/index.esm.js?compression=gzip" /></a>
<a href="https://www.npmjs.com/package/react-happy-global-state"><img alt="downloads" src="https://img.shields.io/npm/dm/react-happy-global-state.svg" /></a>
<a href="https://github.com/react-earth/react-happy-global-state"><img alt="license" src="https://img.shields.io/npm/l/react-happy-global-state" /></a>
</p>

## Quick Features 🥳

- Manage your global state, just like using the useState hook.
- Built with typescript, provide type protection, code autocompletion, make your app robust.
- Less than 1kB size.

## How to use 📖

### Install package

```shell
npm install react-happy-global-state
```

### Create your store.ts

```tsx
import { createGlobalState } from 'react-happy-global-state';

// define you GlobalState type
type GlobalState = {
  count: number;
};

// set your default global state
const DEFAULT_GLOBAL_STATE: GlobalState = {
  count: 0,
};

export const { GlobalStateProvider, useGlobalState } = createGlobalState({
  defaultState: DEFAULT_GLOBAL_STATE,
});
```

### Use GlobalStateProvider to wrap your App

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { GlobalStateProvider } from './store';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    {/* use GlobalStateProvider wrap your App  */}
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>,
);
```

### Use useGlobalState in your Component

```tsx
import React from 'react';
import { useGlobalState } from './store';

export const Counter = () => {
  // use useGlobalState hook to get/set your global state
  const [count, setCount] = useGlobalState('count');

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
```

Click [here](https://codesandbox.io/s/demo-5fvh56?file=/src/App.tsx) to try it by yourself.
