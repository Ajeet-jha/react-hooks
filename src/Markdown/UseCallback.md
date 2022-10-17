## useCallback

React's useCallback Hook can be used to optimize the rendering behavior of your React function components.

_Note: Don't mistake React's useCallback Hook with React's useMemo Hook. While useCallback is used to memoize functions, useMemo is used to memoize values._

_Note: Don't mistake React's useCallback Hook with React's memo API. While useCallback is used to memoize functions, React memo is used to wrap React components to prevent re-renderings._

The React useCallback Hook returns a memoized callback function.
Think of memoization as caching a value so that it does not need to be recalculated.
This allows us to isolate resource intensive functions so that they will not automatically run on every render.
The useCallback Hook only runs when one of its dependencies update.
This can improve performance.

```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```
