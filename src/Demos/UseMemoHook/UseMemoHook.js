import { useState, useMemo } from 'react';

function factorialOf(n) {
	console.log('factorialOf(n) called!');
	return n <= 0 ? 1 : n * factorialOf(n - 1);
}

function CalculateFactorial() {
	const [number, setNumber] = useState(1);
	const [, setInc] = useState(0);

	// const factorial = factorialOf(number);
	const factorial = useMemo(() => factorialOf(number), [number]);

	const onChange = (event) => {
		setNumber(Number(event.target.value));
	};

	const onClick = () => setInc((i) => i + 1);

	return (
		<div>
			Factorial of
			<input type="number" value={number} onChange={onChange} />
			is {factorial}
			<button onClick={onClick}>Re-render</button>
		</div>
	);
}

export default CalculateFactorial;
