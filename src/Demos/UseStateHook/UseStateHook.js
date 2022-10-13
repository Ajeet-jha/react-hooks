import { useState } from 'react';
import chalk from 'chalk';

const { log } = console;

function UserForm() {
	const [contactInfo, setContactInfo] = useState({
		name: '',
		email: '',
		phonenumber: '',
	});

	const handleChange = (event) => {
		setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		// prevents the submit button from refreshing the page
		event.preventDefault();
		log(
			chalk.bgCyan.whiteBright(
				'==>>>',
				`${chalk.underline.bold('Form Data')}<<<== `,
				JSON.stringify(contactInfo, null, 2)
			)
		);
		setContactInfo({ name: '', email: '', phonenumber: '' });
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
						value={contactInfo.name}
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={contactInfo.email}
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						type="number"
						name="phonenumber"
						placeholder="Phone Number"
						value={contactInfo.phonenumber}
						onChange={handleChange}
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
