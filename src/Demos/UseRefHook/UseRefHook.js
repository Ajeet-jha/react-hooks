import { useEffect, useRef } from 'react';
import chalk from 'chalk';

const { log } = console;

function UseRefHook() {
	// create a ref
	const divElement = useRef();

	// trigger on the first render of the component
	useEffect(() => {
		// get the height of the div element
		log(
			chalk.bgCyan.whiteBright(
				`The height of the div is: + ${divElement.current.offsetHeight}`
			)
		);
	}, []);

	return (
		<div ref={divElement} style={{ height: '200px' }}>
			{divElement && divElement.current && (
				<p>{divElement.current.offsetHeight}</p>
			)}
		</div>
	);
}

export default UseRefHook;
