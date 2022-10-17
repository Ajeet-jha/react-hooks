import { useRef, useEffect, useLayoutEffect } from 'react';

import chalk from 'chalk';

const { log } = console;

function Input() {
	/**
	 * Once the component is rendered, the input value becomes "another user" but the console says
	 * "Ajeet jha".
	 *  The useLayoutEffect already fired synchronously after the DOM mutation,
	 *  before the browser could paint "Vignesh"
	 *
	 */
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.value = 'Vignesh';
		log(chalk.red('==>>>', `${chalk.underline.bold('useEffect')} <<<== `));
	});

	useLayoutEffect(() => {
		log(
			chalk.green(
				'==>>>',
				`${chalk.underline.bold(`${inputRef.current.value}`)} <<<== `
			)
		);
	});

	return (
		<div>
			<input type="text" value="Ajeet jha" ref={inputRef} />
		</div>
	);
}

export default Input;
