// import { useId } from 'react';
// import chalk from 'chalk';
// const {log} = console;
// import Intro from './Components/Intro';
// import UseIdHook from './Components/UseIdHook';
// import UseStateHook from './Components/UseStateHook';
// import UseEffectHook from './Components/UseEffectHook';
// import UseRefHook from './Components/UseRefHook';
import UserReducerHook from './Components/UserReducerHook';

import './App.css';

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
			{/* <UseStateHook /> */}
			{/* <UseEffectHook /> */}
			<UserReducerHook />
		</div>
	);
}

export default App;
