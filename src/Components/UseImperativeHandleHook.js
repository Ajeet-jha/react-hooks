import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import UseImperativeHandleMarkdown from '../Markdown/UseImperativeHandle.md';
import UseImperativeHandleHookDemo from '../Demos/UseImperativeHandleHook/UseImperativeHandleHook';

function UseImperativeHandleHook() {
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		fetch(UseImperativeHandleMarkdown)
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<>
			<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
			<UseImperativeHandleHookDemo />
		</>
	);
}

export default UseImperativeHandleHook;
