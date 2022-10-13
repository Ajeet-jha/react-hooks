import { useRef, forwardRef } from 'react';

const InputText = forwardRef((props, ref) => (
	// eslint-disable-next-line
	<input ref={ref} {...props} />
));

function UseRefHook() {
	// Define useRef() to access form data
	const ref = useRef();

	function focus() {
		ref.current.focus();
	}

	return (
		<div className="App">
			<InputText ref={ref} placeholder="my input" />
			<button onClick={focus}>Focus</button>
		</div>
	);
}

export default UseRefHook;
