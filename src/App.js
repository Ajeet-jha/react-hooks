// import { useId } from 'react';
// import chalk from 'chalk';
// const {log} = console;
// import Intro from './Components/Intro';
// import UseIdHook from './Components/UseIdHook';
// import UseStateHook from './Components/UseStateHook';
// import UseEffectHook from './Components/UseEffectHook';
// import UseRefHook from './Components/UseRefHook';
// import UseReducerHook from './Components/UseReducerHook';
import UserMemoHook from './Components/UseMemoHook';

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
			{/* <UseReducerHook /> */}
			<UserMemoHook />
		</div>
	);
}

export default App;
