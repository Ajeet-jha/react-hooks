import { useEffect, useState } from 'react';
import chalk from 'chalk';

const { log } = console;

function UseEffectHook() {
	const [user, setUser] = useState({});

	const fetctImage = async () => {
		const res = await fetch('https://randomuser.me/api/');
		const data = await res.json();
		setUser(data.results[0]);
	};

	const changeImage = () => {
		fetctImage();
	};

	useEffect(() => {
		log(chalk.bgCyan.whiteBright('useEffect is executed !!'));
		fetctImage();
	}, []);

	return (
		<>
			{Object.keys(user).length && (
				<div className="profile">
					<div className="text">
						<p>
							Name : {`${user.name.title} ${user.name.first} ${user.name.last}`}{' '}
						</p>
						<p>Gender : {user.gender}</p>
						<p>Email : {user.email}</p>
						<p>country : {user.location.country}</p>
						<p>Age : {user.dob.age}</p>
					</div>
					<div className="image">
						<img src={user.picture.large} alt={user.name.first} />
					</div>
				</div>
			)}
			<button onClick={changeImage}>Change Image</button>
		</>
	);
}

export default UseEffectHook;
