import { useState } from 'react';

const numbers = [...new Array(20000).keys()];

// Normal way
function UseDeferredValueHook() {
	const [query, setQuery] = useState('');

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div>
			<input type="number" onChange={handleChange} value={query} />
			<div>
				{numbers.map((i) =>
					query ? (
						i.toString().startsWith(query) && (
							<span key={i}>
								{i} {', '}
							</span>
						)
					) : (
						<span key={i}>
							{i} {', '}
						</span>
					)
				)}
			</div>
		</div>
	);
}

export default UseDeferredValueHook;
