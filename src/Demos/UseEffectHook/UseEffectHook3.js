import { useEffect, useState } from 'react';
import chalk from 'chalk';

const { log } = console;

function UseEffectHook() {
	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});

	useEffect(() => {
		log(chalk.bgCyan.whiteBright('useEffect is executed !!'));
		function handleResize() {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
		<div>
			Rendered at {dimensions.width} x {dimensions.height}
		</div>
	);
}

export default UseEffectHook;
