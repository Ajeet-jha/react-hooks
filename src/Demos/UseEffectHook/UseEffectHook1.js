import { useEffect, useState } from 'react';
import chalk from 'chalk';

const { log } = console;

function UseEffectHook() {
	const [width, setWidth] = useState(0);
	const [value, setValue] = useState('');
	useEffect(() => {
		log(chalk.bgCyan.whiteBright('useEffect is executed !!'));
		setInterval(() => {
			setWidth((preValue) => (preValue < 900 ? preValue + 10 : 1000));
		}, 1000);
	}, [width]);

	return (
		<>
			<div className="parent-div">
				<div className="child-div" style={{ width: `${width}px` }}>
					<span>{width}</span>
				</div>
			</div>
			<input value={value} onChange={(e) => setValue(e.target.value)} />
		</>
	);
}

export default UseEffectHook;
