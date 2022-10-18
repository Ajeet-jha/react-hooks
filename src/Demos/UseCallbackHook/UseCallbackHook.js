import { useState, useCallback, memo } from 'react';
import chalk from 'chalk';

const { log } = console;

const Todos = memo(({ todos, addTodo }) => {
	log(chalk.bgCyan.whiteBright('child render'));
	return (
		<>
			<h2>My Todos</h2>
			{todos.map((todo) => (
				<p key={new Date()}>{todo}</p>
			))}
			<button onClick={addTodo}>Add Todo</button>
		</>
	);
});

function Demo() {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	const increment = () => {
		setCount((c) => c + 1);
	};
	const addTodo = useCallback(() => {
		setTodos((t) => [...t, 'New Todo']);
	}, [todos]);

	return (
		<>
			<Todos todos={todos} addTodo={addTodo} />
			<hr />
			<div>
				Count: {count}
				<button onClick={increment}>+</button>
			</div>
		</>
	);
}

export default Demo;
