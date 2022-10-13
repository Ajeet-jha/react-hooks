import { useEffect, useState } from 'react';
import chalk from 'chalk';

const { log } = console;

function UseEffectHook() {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		log(chalk.bgCyan.whiteBright('useEffect is executed !!'));
		const interval = setInterval(() => {
			setWidth((preValue) => (preValue < 900 ? preValue + 10 : 1000));
			if (width >= 1000) {
				clearInterval(interval);
			}
		}, 1000);
	});

	return (
		<div className="parent-div">
				<div className="child-div" style={{ width: `${width}px` }}>
					<span>{width}</span>
				</div>
			</div>
	);
}

export default UseEffectHook;
