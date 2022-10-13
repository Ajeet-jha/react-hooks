### The useId hook takeaways

---

- The useId is a new hook introduced in **React 18**. The useId hook helps generate a unique Id on both the client-side and server-side.
- The previous one was called the `useOpaqueIdentifierhook` in React. The `useOpaqueIdentifierhook` had many bugs and limitations, so the useId hook was delayed.
- useId returns a unique id for _client and server-side_
- useId generates a string that includes the : token. This helps ensure that the token is _unique_, but is not supported in CSS selectors or APIs like `querySelectorAll`.
- useId is **not** for generating keys in a list. Keys should be generated from _your data_. [React Doc](https://reactjs.org/docs/lists-and-keys.html#keys)
