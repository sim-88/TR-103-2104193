# Day 21 - MERN Stack Training

## Topics Covered

### 1. UseRef Hook
The `useRef` hook in React allows you to persist values between renders without causing re-renders, making it useful for storing mutable values that don’t affect the output. 

#### Key Features of `useRef`:
- **Persistent Data**: Information stored in `useRef` stays the same across re-renders, unlike regular variables that reset on every render.
- **No Re-renders**: Changing the `.current` property of a ref does not cause a re-render, unlike state variables.
- **Local to Component**: Each instance of a component using `useRef` has its own ref value, ensuring that the value is not shared across different instances.

#### Example: Using `useRef` in a Click Counter
Here’s a simple example that shows how to use `useRef` in a counter application. The `useRef` stores the click count without triggering re-renders when the value changes.

```jsx
import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}
```

In this example:
- The `ref.current` holds the number of times the button has been clicked.
- Clicking the button increments the `ref.current` value and shows an alert with the updated count.
- The `ref.current` value persists between renders but does not cause the component to re-render when updated.

### 2. Caveats of `useRef`
While `useRef` is a powerful tool, there are some caveats to keep in mind:
- **Mutable**: Unlike state, `useRef` is mutable. You can change the `.current` property freely, but since React doesn’t track changes in refs, you should avoid using it to store data that affects rendering.
- **No Re-renders**: When you update `ref.current`, React does not re-render the component. So it’s not suitable for storing data that should trigger a UI update.
- **Avoid Mutations During Rendering**: Don’t write or read `ref.current` during the render process, except for initialization. Doing so can lead to unpredictable behavior.

### Best Practice Example:
```jsx
import React, { useRef, useState, useEffect } from 'react';

function Timer() {
  const renderCount = useRef(0);
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    renderCount.current += 1;
    setCount(renderCount.current); // Safely updating state based on ref
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
      <p>This component has rendered {count} times.</p> {/* Uses state instead of ref directly */}
    </div>
  );
}
```
In this case:
- The `renderCount` is updated on each render, but the displayed value is managed via state (`count`), ensuring that React re-renders when necessary.
- This approach avoids directly reading or writing `ref.current` during the render cycle.

### Summary:
- `useRef` is useful for values that need to persist across renders without triggering a re-render.
- Be cautious with mutable objects stored in `ref.current`, and avoid directly using `ref.current` during rendering.

---
