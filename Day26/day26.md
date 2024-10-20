# Day 26 - MERN Stack Training

## Topics Covered

### useMemo Hook

The `useMemo` Hook in React is used for performance optimization by memoizing the result of expensive calculations or computations. It ensures that the function's result is only recomputed when its dependencies change, rather than on every render.

#### Key Points:

1. **Purpose**:
   - `useMemo` prevents unnecessary recalculations of values or data that could slow down your application, especially in cases where a component re-renders frequently.
   - It helps improve performance by "memoizing" the result of an expensive operation and only re-executing the function when one of its dependencies has changed.

2. **When to Use**:
   - Use `useMemo` when you have expensive calculations, like complex computations or data transformations, that don't need to be recalculated on every render.
   - It’s most beneficial in scenarios with large datasets, complex computations, or in apps where performance is critical.

3. **How It Works**:
   - You pass a function and an array of dependencies to `useMemo`. React will recompute the memoized value only if one of the dependencies has changed since the last render.
   - If the dependencies remain the same between renders, `useMemo` returns the cached value, avoiding the need to run the function again.

4. **Advantages**:
   - **Performance Optimization**: Reduces unnecessary re-execution of expensive functions and improves performance in complex apps.
   - **Avoids Re-Rendering**: Helps to optimize components that rely on computed data, ensuring they don’t re-render unnecessarily when the data hasn’t changed.

5. **Caveats**:
   - It should not be overused. If you don't have expensive computations, using `useMemo` might introduce unnecessary complexity without significant performance gains.
   - `useMemo` only optimizes computations; it doesn't prevent the component itself from re-rendering. Use it alongside other techniques, such as `React.memo`, to fully optimize components.

6. **Practical Usage**:
   - Use it in situations where recalculating values on every render would cause performance issues.
   - Common scenarios include filtering or sorting large datasets, complex calculations, or scenarios where a component’s performance is noticeably affected by expensive operations.
   