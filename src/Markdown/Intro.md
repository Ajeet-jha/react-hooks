# A Deep Dive Into React Hooks

---

## What is Hooks in React ?

Hooks are React APIs added to React **16.8** . They enable React `functional components to use React features that were previously only` available in React _class components_ .

In a nutshell,they are functions that bring the power of React class components to functional components, giving you a cleaner way to combine them.

## Why we need Hooks at all ?

Before Hooks, React functional and class components performed distinct functions.
Functional components were only used for **presentation purposes** to render data to the UI. They could only receive and render props from parent components, which were usually class components.
Functional components did not keep track of an internal state and did not know the component lifecycle.
Thus, they were referred to as `“dumb components.”`

## What are the Challenges of React Class Components ?

A React class component is a native JavaScript class, so it inherited the issues of JavaScript classes, including working with this, explicitly binding methods, verbose syntax, Difficult to Reuse and Share Logic and more. [Classes confuse both people and machines](https://reactjs.org/docs/hooks-intro.html#classes-confuse-both-people-and-machines).

## How Hooks Can Help ?

Hooks solve all of the class-related problems listed above. They also enable you to write cleaner, leaner, and more maintainable code.

## Do Hooks cover all use cases for classes?

[React Doc](https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes)

## [Hooks FAQ] (https://reactjs.org/docs/hooks-faq.html)
