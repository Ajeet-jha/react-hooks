## useDebugValue

The useDebugValue hook is simply used to print out debug information for custom hooks. This is incredibly useful if you are creating a library for others to use since they can easily see information about your hook, but it also is useful for your own hooks since you can quickly see detailed information about your hooks.

This debug information is displayed within the React dev tools.

```
    export default function useUser() {
    const [user, setUser] = useState(getUser())

    useDebugValue(user == null ? 'No User' : user.name)

    return [user, setUser]
    }
```

_Tip: We don’t recommend adding debug values to every custom Hook. It’s most valuable for custom Hooks that are part of shared libraries._
