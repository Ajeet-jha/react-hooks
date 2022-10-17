import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import UseDebugValueMarkdown from '../Markdown/UseDebugValue.md';
import UseDebugValueHookDemo from '../Demos/UseDebugValueHook/UseDebugValueHook';

function UseDebugValue() {
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		fetch(UseDebugValueMarkdown)
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<>
			<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
			<UseDebugValueHookDemo />
		</>
	);
}

export default UseDebugValue;
