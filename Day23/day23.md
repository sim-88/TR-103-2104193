# Day 23 - MERN Stack Training

## Topics Covered

### Event Handling in React

Event handling in React is quite similar to handling events in standard JavaScript, but with a few key differences. React normalizes events across different browsers and provides a cross-browser wrapper around the browser’s native event.

#### Key Points:
1. **React events are named in camelCase**:
   - Unlike regular HTML, where event names are lowercase (e.g., `onclick`), React uses camelCase for event names (e.g., `onClick`).

2. **Passing functions as event handlers**:
   - In React, you pass a function (or reference to a function) as an event handler.

#### Example of a Simple Event Handler (Button Click):
```jsx
import React from 'react';

function ClickButton() {
  function handleClick() {
    alert('Button was clicked!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default ClickButton;
```
In this example:
- The `handleClick` function is passed to the `onClick` event of the button.
- When the button is clicked, the `handleClick` function is executed, triggering an alert.

#### Example of Passing Arguments to Event Handlers:
You can pass additional arguments to the event handler using an arrow function.

```jsx
function GreetUser() {
  function greet(name) {
    alert(`Hello, ${name}`);
  }

  return (
    <button onClick={() => greet('Simar')}>
      Greet
    </button>
  );
}

export default GreetUser;
```
In this example:
- The arrow function is used to pass the `name` argument to the `greet` function when the button is clicked.

### Event Object in React

React provides a synthetic event object, which is consistent across all browsers. You can access the event object just like in vanilla JavaScript.

#### Example with Event Object:
```jsx
function InputField() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <input type="text" onChange={handleChange} />
  );
}

export default InputField;
```
Here, the `handleChange` function logs the current value of the input field to the console whenever the user types something. The `event` object contains details about the event, and `event.target.value` gives the current value of the input field.

### Handling Form Submissions

Event handling in forms is very common. You can use the `onSubmit` event to handle form submissions in React.

#### Example:
```jsx
function LoginForm() {
  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    alert('Form submitted!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
```
In this example:
- `handleSubmit` prevents the default form submission behavior using `event.preventDefault()`.
- This is important for handling form submissions in single-page applications (SPAs) where you don't want the page to refresh.

---