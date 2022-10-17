import './App.css';

// import Intro from './Components/Intro';
// import { useId } from 'react';
// import chalk from 'chalk';
// import UseIdHook from './Components/UseIdHook';
// const {log} = console;
// import UseStateHook from './Components/UseStateHook';
// import UseEffectHook from './Components/UseEffectHook';
// import UseRefHook from './Components/UseRefHook';
// import UserReducerHook from './Components/UserReducerHook';
// import UserMemoHook from './Components/UseMemoHook';
// import UseCallbackHook from './Components/UseCallbackHook';
// import Memo from './Components/Memo';
// import UseTransitionHook from './Components/UseTransitionHook';
// import UseDebugValueHook from './Components/UseDebugValue';
// import UseLayoutEffectHook from './Components/UseLayoutEffectHook';
// import UseImperativeHandleHook from './Components/UseImperativeHandleHook';
import UseDeferredValueHook from './Components/UseDeferredValueHook';

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
			{/* <UseCallbackHook /> */}
			{/* <Memo /> */}
			{/* <UseTransitionHook /> */}
			{/* <UseDebugValueHook /> */}
			{/* <UseLayoutEffectHook /> */}
			{/* <UseImperativeHandleHook /> */}
			<UseDeferredValueHook />
		</div>
	);
}

export default App;
