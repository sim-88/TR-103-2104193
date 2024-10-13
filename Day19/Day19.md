# Day 19: MERN Stack Training Diary

## Key Concepts in React

### 1. Return Only One React Wrapper or One `div`
- **React Components** must return a single element, which acts as a wrapper. This is typically a `div`, but React also supports returning `<> </>` (empty fragments) to avoid unnecessary `div` nesting.
- **Why?**: React requires a single parent element to group multiple elements, ensuring the component's structure is properly rendered.

### 2. JSX - Mixing HTML with JavaScript
- **JSX**: A syntax extension that allows combining HTML-like code within JavaScript. This makes it easier to describe UI elements inside React components.
- **Example**:
  ```jsx
  const element = <h1>Hello, world!</h1>;

### 3. Props (Properties)
- **Props**: Short for properties, these are used to pass data from parent components to child components in React.
- **Immutable**: Props are read-only and cannot be modified by the receiving component.

#### Example:
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Here, props.name is passed from a parent component, allowing reusability of the Welcome component with different data.