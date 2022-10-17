## Concurrency

Before React 18, rendering was synchronous. This meant that once React started rendering, nothing could stop it until it completed rendering the component.

However, with concurrent rendering, React can pause the rendering and continue with it later or abort the rendering altogether. This is an important new implementation that allows us to provide a more fluid user experience to our users.

`useTransition and useDeferredValue hooks make use of React’s concurrent rendering to allow developers to provide a better user experience in their applications.`
