## What are side effects in React?

Side effects are not predictable because they are actions which are performed with the "outside world."
We perform a side effect when we need to reach outside of our React components to do something. Performing a side effect, however, will not give us a predictable result.

Common side effects include:

- Making a request to an API for data from a backend server
- To interact with browser APIs (that is, to use document or window directly)
- Using unpredictable timing functions like setTimeout or setInterval

## What is pure function ?

A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.

Also a pure function does not produce any observable side effects such as network requests or data mutation etc.

```
export default function App() {
  return <User name="John Doe" />
}

function User(props) {
  return <h1>{props.name}</h1>; // John Doe
}
```

## useEffect() is for side-effects , why ?

A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.

The component rendering and side-effect logic are independent. It would be a mistake to perform side-effects directly in the body of the component, which is primarily used to compute the output.

```
function Greet({ name }) {
  const message = `Hello, ${name}!`; // Calculates output
  // Bad!
  document.title = `Greetings to ${name}`; // Side-effect!
  return <div>{message}</div>;       // Calculates output
}
```

```
import { useEffect } from 'react';
function Greet({ name }) {
  const message = `Hello, ${name}!`;   // Calculates output
  useEffect(() => {
    // Good!
    document.title = `Greetings to ${name}`; // Side-effect!
  }, [name]);
  return <div>{message}</div>;         // Calculates output
}
```

## useEffect() hook accepts 2 arguments

_useEffect(callback[, dependencies]);_

- `callback` is the function containing the side-effect logic. callback is executed right after changes were being pushed to DOM.
- `dependencies` is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.

## Dependencies argument

- Not provided: the side-effect runs after every rendering.

```
import { useEffect } from 'react';
function MyComponent() {
  useEffect(() => {
    // Runs after EVERY rendering
  });
}
```

- An empty array []: the side-effect runs once after the initial rendering.

```
import { useEffect } from 'react';
function MyComponent() {
  useEffect(() => {
    // Runs ONCE after initial rendering
  }, []);
}
```

- Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs only when any depenendecy value changes.

```
import { useEffect, useState } from 'react';
function MyComponent({ prop }) {
  const [state, setState] = useState('');
  useEffect(() => {
    // Runs ONCE after initial rendering
    // and after every rendering ONLY IF `prop` or `state` changes
  }, [prop, state]);
}
```
