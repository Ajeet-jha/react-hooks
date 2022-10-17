## useLayoutEffect

The _useLayoutEffect_ hook works synchronously. It runs immediately after React has performed all DOM mutations. It will run after every render but before the screen is updated.

We can use it for DOM measurements (like a scroll position or styles for a specific element), animations, mutations, etc.

The useLayoutEffect runs synchronously, which means that the application won’t be visually updated until your effect finishes running.

This is how the useLayoutEffect hooks work step-by-step:

## The Difference Between useEffect and useLayoutEffect

`useEffect` runs asynchronously and after a render is painted to the screen.

So that looks like:

- You cause a render somehow (change state, or the parent re-renders)
- React renders your component (calls it)
- The screen is visually updated
- THEN useEffect runs

`useLayoutEffect`, on the other hand, runs synchronously after a render but before the screen is updated. That goes:

- A re-render was caused inside a React component.
- React renders your component.
- useLayoutEffect runs synchronously.
- React waits for the useLayoutEffect to finish running.
- The screen is updated.

## When to useLayoutEffect

- If your component is flickering when state is updated – as in, it renders in a partially-ready state first and then immediately re-renders in its final state – that’s a good clue that it’s time to swap in useLayoutEffect.

-One other situation you might want to use useLayoutEffect instead of useEffect is if you're updating a value (like a ref) and you want to make sure it's up-to-date before any other code runs.

```
    const ref = React.useRef()
    React.useEffect(() => {
    ref.current = 'some value'
    })

    // then, later in another hook or something
    React.useLayoutEffect(() => {
    console.log(ref.current) // <-- this logs an old value because this runs first!
    })
```

## Should I useEffect or useLayoutEffect?

Most of the time, `useEffect` is the right choice. If your code is causing `flickering`, switch to `useLayoutEffect`
