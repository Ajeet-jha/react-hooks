import { useId } from 'react';
import chalk from 'chalk';
// import Intro from './Components/Intro';
import UseIdHook from './Components/UseIdHook';
import './App.css';

const { log } = console;

function App() {
	const id = useId();
	log(
		chalk.green('==>>>', `${chalk.underline.bold('useId from App')}<<<== `, id)
	);
	return (
		<div className="App">
			Learn React Hooks
			{/* <Intro /> */}
			<UseIdHook />
		</div>
	);
}

export default App;
