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
import UserMemoHook from './Components/UseMemoHook';

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
			<UserMemoHook />
		</div>
	);
}

export default App;
