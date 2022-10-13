import { useReducer } from 'react';
import chalk from 'chalk';

const { log } = console;

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
};

function reducer(state, action) {
	switch (action.type) {
		case 'firstName':
			return { ...state, firstName: action.value };
		case 'lastName':
			return { ...state, lastName: action.value };
		case 'email':
			return { ...state, email: action.value };
		case 'password':
			return { ...state, password: action.value };
		case 'reset':
			return { ...initialState };
		default:
			throw new Error();
	}
}

function UserReducerHook() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const { firstName, lastName, email, password } = state;

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch({ type: name, value });
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		log(chalk.bgGreenBright.redBright(JSON.stringify(state, null, 2)));
		dispatch({ type: 'reset' });
	};

	return (
		<div>
			<form onSubmit={onFormSubmit} noValidate>
				<div>
					<label htmlFor="firstName">
						<strong>First name</strong>

						<input
							required
							type="text"
							name="firstName"
							id="firstName"
							value={firstName}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="lastName">
						<strong>Last name</strong>

						<input
							type="text"
							name="lastName"
							id="lastName"
							value={lastName}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="email">
						<strong>Email</strong>

						<input
							type="text"
							name="email"
							id="email"
							value={email}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="password">
						<strong>Password</strong>

						<input
							type="text"
							name="password"
							id="password"
							value={password}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<button type="submit">Register</button>
				</div>
			</form>
		</div>
	);
}

export default UserReducerHook;
