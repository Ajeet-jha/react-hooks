import { useState, useTransition } from 'react';

function ListItem({ name, highlight }) {
	const index = name.toLowerCase().indexOf(highlight.toLowerCase());
	if (index === -1) {
		return <div>{name}</div>;
	}
	return (
		<div>
			{name.slice(0, index)}
			<span className="highlight">
				{name.slice(index, index + highlight.length)}
			</span>
			{name.slice(index + highlight.length)}
		</div>
	);
}

function FilterList({ names }) {
	const [query, setQuery] = useState('');
	const [highlight, setHighlight] = useState('');

	const [isPending, startTransition] = useTransition();

	const changeHandler = ({ target: { value } }) => {
		setQuery(value);
		startTransition(() => setHighlight(value));
	};

	return (
		<div>
			<input onChange={changeHandler} value={query} type="text" />
			{isPending && <div>Wait...</div>}
			{names.map((name) => (
				<ListItem key={name} name={name} highlight={highlight} />
			))}
		</div>
	);
}

export default FilterList;
