import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import UseCallbackMarkdown from '../Markdown/UseCallback.md';
import UseCallbackHookDemo from '../Demos/UseCallbackHook/UseCallbackHook';

function UseCallbackHook() {
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		fetch(UseCallbackMarkdown)
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<>
			<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
			<UseCallbackHookDemo />
		</>
	);
}

export default UseCallbackHook;
