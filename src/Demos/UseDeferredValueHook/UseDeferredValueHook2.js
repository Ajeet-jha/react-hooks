import { useState, useMemo, useDeferredValue } from 'react';

const numbers = [...new Array(20000).keys()];

function List(props) {
	const { query } = props;
	const defQuery = useDeferredValue(query);

	const list = useMemo(
		() =>
			numbers.map((i) =>
				defQuery ? (
					i.toString().startsWith(defQuery) && (
						<span key={i}>
							{i} {', '}
						</span>
					)
				) : (
					<span key={i}>
						{i} {', '}
					</span>
				)
			),
		[defQuery]
	);

	return <div>{list}</div>;
}

// useDeferredValue way
function UseDeferredValueHook() {
	/**
	 * useTransition We can use the useTransition hook to tell React that a certain state
	 * change will result in an expensive rendering. React will then deprioritize this
	 * state change allowing other renderings to take place faster providing
	 * a very responsive UI. Such expensive renderings are called transition
	 * updates and the ones that should take place immediately are called
	 * urgent updates. Usually, typing, clicking, and pressing are
	 * considered urgent updates as they should provide users with
	 * an immediate response to ensure a good user experience
	 */

	const [query, setQuery] = useState('');

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div>
			<input type="number" onChange={handleChange} value={query} />
			<List query={query} />
		</div>
	);
}

export default UseDeferredValueHook;
