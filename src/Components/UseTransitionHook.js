import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import UseTransition from '../Markdown/UseTransition.md';
import UseTransitionHookDemo from '../Demos/UseTransitionHook';

function UseEffectHook() {
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		fetch(UseTransition)
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<>
			<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
			<UseTransitionHookDemo />
		</>
	);
}

export default UseEffectHook;
