import React from 'react';
import { GlobalStateProvider } from './store';
import { Counter } from './Counter';

export const App = () => {
  return (
    <>
      <Counter />
      <Counter />
    </>
  );
};
