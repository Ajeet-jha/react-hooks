import React from 'react';
import chalk from 'chalk';
import useForm from './useForm';
import validate from './LoginFormValidationRules';

const { log } = console;

function Form() {
	function login() {
		log(
			chalk.green(
				'==>>>',
				`${chalk.underline.bold('No errors, submit callback called!')}<<<== `
			)
		);
	}

	const { values, errors, handleChange, handleSubmit } = useForm(
		login,
		validate
	);

	return (
		<div>
			<form onSubmit={handleSubmit} noValidate>
				<div>
					<label htmlFor="email">
						Email Address
						<div>
							<input
								autoComplete="off"
								type="email"
								id="email"
								name="email"
								onChange={handleChange}
								value={values.email || ''}
								required
							/>
						</div>
						{errors.email && <p>{errors.email}</p>}
					</label>
				</div>
				<div>
					<label htmlFor="password">
						Password
						<div>
							<input
								id="password"
								type="password"
								name="password"
								onChange={handleChange}
								value={values.password || ''}
								required
							/>
						</div>
					</label>
					{errors.password && <p>{errors.password}</p>}
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default Form;
