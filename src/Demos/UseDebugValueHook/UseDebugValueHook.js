import { useState, useDebugValue } from 'react';

const useCustomHook = () => {
	const [count, setCount] = useState(0);
	useDebugValue(`My Count: ${count}`);
	return [count, setCount];
};

function Child() {
	const [count, set] = useCustomHook();
	return (
		<>
			<pre>{count}</pre>
			<button onClick={() => set((c) => c + 1)}>Press me</button>
		</>
	);
}

function Parent() {
	return <Child>Start editing to see some magic happen!</Child>;
}

export default Parent;
