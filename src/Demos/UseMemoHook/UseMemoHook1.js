import { useState, useMemo } from 'react';
import chalk from 'chalk';

const { log } = console;

const add = (num1, num2) => {
	log(chalk.bgCyan.whiteBright('Adding numbers'));
	return parseInt(num1, 10) + parseInt(num2, 10);
};

function Form() {
	const [name, setName] = useState('');
	const [val1, setVal1] = useState(0);
	const [val2, setVal2] = useState(0);

	//    const answer = add(val1, val2);
	const answer = useMemo(() => add(val1, val2), [val1, val2]);

	return (
		<div>
			<input
				placeholder="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				placeholder="Value 1"
				value={val1}
				onChange={(e) => setVal1(e.target.value)}
			/>
			<input
				placeholder="Value 2"
				value={val2}
				onChange={(e) => setVal2(e.target.value)}
			/>
			{answer}
		</div>
	);
}

export default Form;
