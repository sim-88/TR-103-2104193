# Day 21 - MERN Stack Training

## Topics Covered

### 1. Conditional Rendering

Conditional rendering in React allows you to render different UI elements or components based on a condition. Two common approaches for conditional rendering are using the **ternary operator** and **logical AND (&&)**.

#### Using Ternary Operator:
The ternary operator is a concise way to handle conditional rendering, where the syntax follows:
```jsx
condition ? <ComponentA /> : <ComponentB />
```
- If the `condition` is true, `ComponentA` is rendered; otherwise, `ComponentB` is rendered.
- This is useful when you have two different components or elements that depend on the condition.

**Example**:
```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}
```

#### Using Logical AND (&&):
The logical AND operator (`&&`) can be used when you want to render something only if the condition is true. If the condition is false, nothing will be rendered.

**Example**:
```jsx
function Notification({ hasMessage }) {
  return (
    <div>
      {hasMessage && <p>You have new messages!</p>}
    </div>
  );
}
```
- Here, the `<p>` element will only be rendered if `hasMessage` is `true`.

### 2. List Rendering Using `map()`

In React, rendering a list of elements can be achieved using JavaScript’s `map()` method. This method is commonly used to iterate over an array and render a component or JSX for each item in the array.

#### Example:
```jsx
function UserList({ users }) {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**Key Points**:
- **`map()` function**: Loops over the `users` array and returns an `<li>` element for each user.
- **`key` prop**: Each list item needs a unique `key` to help React efficiently update the list during re-renders.

#### Practical Considerations:
- Ensure that each item in the list has a unique `key` prop, which helps React optimize rendering by identifying which items have changed.
- If you are rendering complex components inside the `map()`, break them into separate functional components to keep the code clean.

---