import { useState, useMemo, useTransition } from 'react';

const numbers = [...new Array(20000).keys()];

// useTransition way
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
	const [text, setText] = useState('');
	const [isPending, startTransition] = useTransition();

	const handleChange = (e) => {
		setText(e.target.value);
		startTransition(() => {
			setQuery(e.target.value);
		});
	};

	const list = useMemo(
		() =>
			numbers.map((i) =>
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
			),
		[query]
	);

	return (
		<div>
			<input type="number" onChange={handleChange} value={text} />
			<div>{isPending ? 'Loading...' : list}</div>
		</div>
	);
}

export default UseDeferredValueHook;
