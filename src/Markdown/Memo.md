## What is React.memo()?

React.memo() was released with React v16.6. While class components already allowed you to control re-renders with the use of PureComponent or shouldComponentUpdate, React 16.6 introduced the ability to do the same with functional components.

React.memo() is a higher-order component (HOC), which is a fancy name for a component that takes a component as a prop and returns a component that prevents a component from re-rendering if the props (or values within it) have not changed.

Note : `While React.memo() is a HOC, useMemo() is a React Hook. With useMemo(), we can return memoized values and avoid re-rendering if the dependencies to a function have not changed.`

```
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
```

## Where to use React Memo?

- Use it if you are using a pure functional component: this means that your component is not using classes and given the same props, it always renders the same output.
- Use it when you know beforehand that a component will render quite often.
- Use it if the re-rendering is done using the same props given to the component. If by any chance the props change, then it’s not a right idea to use memoization here.
- Use it if your component is big enough to have props equality check done by React with a decent number of UI elements. Very short components with just a single heading won’t do justice.

## Where NOT to use React Memo?

- Don’t use React Memo if the component isn’t heavy and renders with different props altogether.
- Wrapping a class-based component in React Memo is undesirable and therefore should not be used. Instead, you can extend PureComponent or implement shouldComponentUpdate() method.

## Should you use React.memo() or useMemo()?

- Use React.memo to memoize an entire component.
- Use useMemo to memoize a value within a functional component.

## [Explanation](https://codesandbox.io/s/react-memo-demo-c9dx1?file=/src/index.js:184-197)

```
export function Movie({ title, releaseDate }) {
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}
```

```
  export const MemoizedMovie = React.memo(Movie);
```

React.memo(Movie) returns a new memoized component MemoizedMovie.

MemoizedMovie outputs the same content as the original Movie component, but with one difference — MemoizedMovie render is memoized.

React reuses the memoized content as long as title and releaseDate props are the same between renderings:

```
  // First render - MemoizedMovie IS INVOKED.
  <MemoizedMovie
    title="Heat"
    releaseDate="December 15, 1995"
  />
```

```
  // Second render - MemoizedMovie IS NOT INVOKED.
  <MemoizedMovie
    title="Heat"
    releaseDate="December 15, 1995"
  />
```
