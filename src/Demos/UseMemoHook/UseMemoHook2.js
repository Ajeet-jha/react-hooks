import { useState, useMemo } from 'react';

const users = [
	{ id: '1', name: 'Foo' },
	{ id: '2', name: 'Bar' },
];

function Filter() {
	const [text, setText] = useState('');
	const [search, setSearch] = useState('');

	const handleText = (event) => {
		setText(event.target.value);
	};

	const handleSearch = () => {
		setSearch(text);
	};

	// const filteredUsers = users.filter((user) => {
	//     console.log("filtering users");
	//     return user.name.toLowerCase().includes(search.toLowerCase());
	// })

	const filteredUsers = useMemo(
		() =>
			users.filter((user) => {
				console.log('filtering users');
				return user.name.toLowerCase().includes(search.toLowerCase());
			}),
		[search]
	);

	return (
		<div>
			<input type="text" value={text} onChange={handleText} />
			<button type="button" onClick={handleSearch}>
				Search
			</button>
			<ul>
				{filteredUsers.map((filteredUser) => (
					<div key={filteredUser.id}>{filteredUser.name}</div>
				))}
			</ul>
		</div>
	);
}

export default Filter;
