## What is useRef ?

useRef is one of the standard hooks provided by React. It will return an object that you can use during the whole lifecycle of the component.
The main use case for the useRef hook is to access a DOM child directly.
useRef can also be very useful to hold a mutable value across different renders of your component.
Updating a ref is a side effect so it should be done only inside a useEffect (or useLayoutEffect) or inside an event handler.
A ref changing value doesn’t trigger a re-render.

## useRef vs useState

- Data or values stored in a reference or ref remains the same, even after component re-rendering, unlike states. So, References do not affect component rendering but states do.
- useState returns 2 properties or an array. One is the value or state and the other is the function to update the state. In contrast, useRef returns only one value which is the actual data stored.
- When the reference value is changed, it is updated without the need to refresh or re-render. However in useState, the component must render again to update the state or its value.

```
function App() {
  let someRef = useRef()
  someRef.current = '❌ Updating a ref is a side effect!'
  useEffect(() => {
    someRef.current = "✅ This is OK"
  })
  const handleClick = () => {
    someRef.current = "✅ This is OK too"
  }
  return ...
}
```

[useRef Guide](https://blog.logrocket.com/usestate-vs-useref/)
