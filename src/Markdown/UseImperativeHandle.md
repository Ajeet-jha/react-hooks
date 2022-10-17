## useImperativeHandle

Usually when you use `useRef` you are given the instance value of the component the ref is attached to. This allows you to interact with the DOM element directly.

`useImperativeHandle` is very similar, but it lets you do two things:

- It gives you control over the value that is returned. Instead of returning the instance element, you explicitly state what the return value will be.
- It allows you to replace native functions (such as blur, focus, etc) with functions of your own, thus allowing side-effects to the normal behavior, or a different behavior altogether. Though, you can call the function whatever you like.

useImperativeHandle customizes the instance value that is exposed to parent components when using ref

```
    useImperativeHandle(ref, createHandle, [dependencies])
```

`ref`: The ref passed down from the parent component
`createHandle`: The value to be exposed to the parent component
`dependencies`: An array of values that cause the Hook to rerun when changed
