import './App.css';

// import Intro from './Components/Intro';
// import { useId } from 'react';
// import chalk from 'chalk';
// import UseIdHook from './Components/UseIdHook';

// const {log} = console;

import UseStateHook from './Components/UseStateHook';

function App() {
	// const id = useId();
	// log(
	// 	chalk.green('==>>>', `${chalk.underline.bold('useId from App')  }<<<== `, id)
	// );
	return (
		<div className="App">
			Learn React Hooks
			{/* <Intro /> */}
			{/* <UseIdHook /> */}
			<UseStateHook />
		</div>
	);
}

export default App;
