import { useEffect, useRef } from 'react';
import chalk from 'chalk';

const { log } = console;

function UseRefHook() {
	// create a ref
	const counter = useRef(0);

	// increase the counter by one
	const handleIncreaseCounter = () => {
		// A ref changing value doesn’t trigger a re-render
		counter.curent = counter.current + 1;
	};

	useEffect(() => {
		log(chalk.bgCyan.whiteBright(`counter changed to: ${counter.current}`));
	}, [counter]); // It is useless to add a ref to a dependency array

	/** Adding a ref to a dependency array (for example the one of a useEffect hook) will not trigger the callback! This is also a very common error. */

	return (
		<div>
			<h1>Learn about useRef!</h1>
			<h2>Value: {counter.current}</h2>
			<button onClick={handleIncreaseCounter}>Increase counter</button>
		</div>
	);
}

export default UseRefHook;
