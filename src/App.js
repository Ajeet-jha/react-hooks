// import { useId } from 'react';
// import chalk from 'chalk';
// const {log} = console;
// import Intro from './Components/Intro';
// import UseIdHook from './Components/UseIdHook';
// import UseStateHook from './Components/UseStateHook';
// import UseEffectHook from './Components/UseEffectHook';
// import UseRefHook from './Components/UseRefHook';
// import UseReducerHook from './Components/UseReducerHook';
// import UseMemoHook from './Components/UseMemoHook';
// import UseCallbackHook from './Components/UseCallbackHook';
// import Memo from './Components/Memo';
// import UseTransitionHook from './Components/UseTransitionHook';
// import UseDebugValueHook from './Components/UseDebugValue';
import UseLayoutEffectHook from './Components/UseLayoutEffectHook';

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
			{/* <UseRefHook /> */}
			{/* <UseReducerHook /> */}
			{/* <UseMemoHook /> */}
			{/* <UseCallbackHook /> */}
			{/* <Memo /> */}
			{/* <UseTransitionHook /> */}
			{/* <UseDebugValueHook /> */}
			<UseLayoutEffectHook />
		</div>
	);
}

export default App;
