## useTransition

This hook helps increase the performance of your applications, increase the responsiveness of your application to users, and overall just make your application better.

The useTransition hook allows us to specify some state updates as not as important. These state updates will be executed in parallel with other state updates, but the rendering of the component will not wait for these less important state updates.

```
    const [isPending, startTransition] = useTransition();
```

startTransition lets you mark updates in the provided callback as transitions:

```
    startTransition(() => {
        setCount(count + 1);
    })
```

isPending indicates when a transition is active to show a pending state:

```
    {isPending && <Spinner />}
```
