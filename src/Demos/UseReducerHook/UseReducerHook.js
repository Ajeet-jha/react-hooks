import { useReducer } from 'react';

const initialTodos = [
	{
		id: 1,
		title: 'Todo 1',
		complete: false,
	},
	{
		id: 2,
		title: 'Todo 2',
		complete: true,
	},
	{
		id: 3,
		title: 'Todo 3',
		complete: false,
	},
];

const reducer = (state, action) => {
	switch (action.type) {
		case 'COMPLETE':
			return state.map((todo) => {
				if (todo.id === action.id) {
					return { ...todo, complete: !todo.complete };
				} 
					return todo;
				
			});
		default:
			return state;
	}
};

function UserReducerHook() {
	const [todos, dispatch] = useReducer(reducer, initialTodos);

	const handleComplete = (todo) => {
		dispatch({ type: 'COMPLETE', id: todo.id });
	};

	return (
		<>
			{todos.map((todo) => (
				<div key={todo.id}>
					<label htmlFor="checkbox">
						<input
							id="checkbox"
							type="checkbox"
							checked={todo.complete}
							onChange={() => handleComplete(todo)}
						/>
					</label>
					{todo.title}
				</div>
			))}
		</>
	);
}

export default UserReducerHook;
