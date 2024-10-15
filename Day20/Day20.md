# Day 20: MERN Stack Training Diary

## Hooks in React

- **Hooks**: Introduced in React to provide additional features to functional components that were previously available only in class components.
  - Hooks enable the use of state and lifecycle methods inside functional components.
  - **Why Hooks?**: They simplify component logic by eliminating the need for classes, making the code easier to read and maintain.

## `useState` Hook

- **useState**: A hook that allows functional components to manage state.
  - It returns a stateful value and a function to update that value.
  - When the state is updated using `useState`, the new value is reflected everywhere the state is used.
  
 - Practicality: useState enables dynamic updates in UI based on user interaction or other events.
#### Example:
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}



```
- **Key Point**: The `count` value is rendered wherever it's used, and the entire component re-renders when the state changes using `setCount`.

## `useEffect` Hook

- **useEffect**: A hook that allows you to perform side effects in function components (like data fetching, subscriptions, or manually changing the DOM).
  - By default, `useEffect` runs after the first render and after every update.
  - Can be configured to run only on specific state changes by passing an array of dependencies.

#### Example:
```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs every time the component is rendered
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(timer);
  }, []); // Empty array ensures the effect runs only once after the initial render

  return <p>Timer: {count} seconds</p>;
}
```
- **Key Point**: The `useEffect` Hook runs after the component renders, and the cleanup function (return statement) ensures that side effects like timers, subscriptions, or event listeners are cleaned up when the component unmounts.

## Practicality of Hooks:
- `useState` allows dynamic state updates and re-rendering.
- `useEffect` is essential for handling side effects like API calls, subscriptions, or timers, and its cleanup function ensures resource efficiency and proper lifecycle management.