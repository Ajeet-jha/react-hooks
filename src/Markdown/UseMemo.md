## Why a component can re-render itself?

“Component re-renders itself when state or prop value changes” is common knowledge.
when a component re-renders itself, it also re-renders all of its children.

## What is Memoization

In programming, memoization is an optimization technique that makes applications more efficient and hence faster. It does this by storing computation results in _cache_, and retrieving that same information from the cache the next time it's needed instead of computing it again.
In simpler words, it consists of storing in cache the output of a function, and making the function check if each required computation is in the cache before computing it.
`Think of memoization as caching a value so that it does not need to be recalculated....`

## How Does Memoization Work?

The concept of memoization in JavaScript relies on two concepts:

- _Closures_: The combination of a function and the lexical environment within which that function was declared.
- _Higher Order Functions_: Functions that operate on other functions, either by taking them as arguments or by returning them.

## When to Memoize ?

Memoization in React is a good tool to have in our belts, but it's not something you should use everywhere. These tools are useful for dealing with functions or tasks that require heavy computation.
`const memoizedResult = useMemo(compute, dependencies);`

[When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback).

## useMemo

The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
To fix this performance issue, we can use the useMemo Hook to memoize the _expensiveCalculation function_.
This will cause the function to only run when needed.
We can wrap the expensive function call with useMemo.
The useMemoHook accepts a `second parameter to declare dependencies`. The expensive function will only run when its dependencies have changed.

_While performance can be improved by using this hook, it can also slow down your application if you overuse it. The more you use the hook, the more your application has to allocate memory._

```
 const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

```

```
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
```
