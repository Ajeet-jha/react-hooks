import { useRef } from 'react';
import chalk from 'chalk';

const { log } = console;

function UseRefHook() {
	// Define useRef() to access form data
	const formData = useRef();

	// OnSubmit function
	const onSubmit = (event) => {
		event.preventDefault();
		// Accessing form reference with formData variable.
		const { name, email } = formData.current;
		log(
			chalk.bgCyan.whiteBright(`Name : ${name.value}, Email : ${email.value}`)
		);
	};

	return (
		<form ref={formData}>
			<input type="text" name="name" />
			<br />
			<input type="email" name="email" />
			<br />
			<button type="submit" onClick={onSubmit}>
				Submit
			</button>
		</form>
	);
}

export default UseRefHook;
