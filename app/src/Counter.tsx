import React from 'react';
import { useGlobalState } from './store';

export const Counter = () => {
  const [count, setCount] = useGlobalState('count');

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
