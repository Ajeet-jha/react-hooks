import { useId } from 'react';
import chalk from 'chalk';

const { log } = console;

function Checkbox() {
	const id = useId();
	log(
		chalk.green('==>>>', `${chalk.underline.bold('useId from Demo')}<<<== `, id)
	);
	const handleCheck = (e) => {
		log(
			chalk.bgYellowBright.blueBright(
				'==>>>',
				`${chalk.underline.bold('useId from App')}<<<== `,
				e.target.id
			)
		);
	};
	return (
		<>
			<label htmlFor={id}>
				Do you like React?
				<input id={id} type="checkbox" name="react" onClick={handleCheck} />
			</label>
			<div>
				<label htmlFor={`${id}-firstName`}>
					First Name
					<div>
						<input id={`${id}-firstName`} type="text" />
					</div>
				</label>
				<label htmlFor={`${id}-lastName`}>
					Last Name
					<div>
						<input id={`${id}-lastName`} type="text" />
					</div>
				</label>
			</div>
		</>
	);
}

export default Checkbox;
