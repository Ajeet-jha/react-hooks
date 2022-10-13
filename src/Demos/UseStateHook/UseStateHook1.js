import { useState } from 'react';
import chalk from 'chalk';

const { log } = console;

function UserForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phonenumber, setPhonenumber] = useState('');

	const handleSubmit = (event) => {
		// prevents the submit button from refreshing the page
		event.preventDefault();
		const contactInfo = {
			name,
			email,
			phonenumber,
		};
		log(
			chalk.bgCyan.whiteBright(
				'==>>>',
				`${chalk.underline.bold('Form Data')}<<<== `,
				JSON.stringify(contactInfo, null, 2)
			)
		);
		setName('');
		setEmail('');
		setPhonenumber('');
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<h3>Contact Form</h3>
				</div>
				<div>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<input
						type="number"
						name="phonenumber"
						placeholder="Phone Number"
						value={phonenumber}
						onChange={(e) => setPhonenumber(e.target.value)}
					/>
				</div>
				<div>
					<button>Submit Contact</button>
				</div>
			</form>
		</div>
	);
}

export default UserForm;
