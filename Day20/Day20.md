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
