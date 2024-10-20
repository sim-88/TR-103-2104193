# Day 24 - MERN Stack Training

## Topics Covered

### React Router

React Router is a standard library for routing in React. It enables the navigation between different components in a React application, allowing you to build a Single Page Application (SPA) with multiple views.

#### Key Points:
1. **Single Page Application (SPA)**:
   - React Router helps in creating SPAs where the entire application runs in a single page, and the browser does not refresh when navigating between views.

2. **Installation**:
   To install `react-router-dom`, run the following command:
   ```sh
   npm install react-router-dom
   ```

3. **Basic Setup**:
   - Import the required components from `react-router-dom` to configure the routing:
     ```jsx
     import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
     ```

4. **Defining Routes**:
   - You define routes using the `<Routes>` and `<Route>` components. Each `<Route>` specifies a path and the component to render when that path is visited.

#### Example of Basic Routing:
```jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```
- In this example, the `Home` component will be rendered when the path is `/`, and the `About` component will be rendered when the path is `/about`.

### **Link Component**

The `Link` component is used to navigate between different routes in React Router without refreshing the page. It replaces traditional anchor (`<a>`) tags.

#### Example:
```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
```
- The `Link` component helps to navigate to different paths within the app without causing a full page reload.

### **NavLink Component**

The `NavLink` component is similar to `Link`, but it is used when you need to apply active styles to the current navigation link.

#### Example:
```jsx
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
```
- The `NavLink` automatically applies the `activeClassName` when the link matches the current URL, which helps in styling the active navigation link.

### Practical Use of `Link` and `NavLink`:
- Use `Link` when you need basic navigation between pages.
- Use `NavLink` when you want to indicate the active page or route (e.g., highlighting the current page in a navigation menu).

---
