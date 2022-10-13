import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import UseRefMarkdown from '../Markdown/UseRef.md';
// import UseRefHookDemo from '../Demos/UseRefHook/UseRefHook';
// import UseRefHookDemo from '../Demos/UseRefHook/UseRefHook1';
// import UseRefHookDemo from '../Demos/UseRefHook/UseRefHook2';
import UseRefHookDemo from '../Demos/UseRefHook/UseRefHook3';

function UseRefHook() {
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		fetch(UseRefMarkdown)
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<>
			<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
			<UseRefHookDemo />
		</>
	);
}

export default UseRefHook;
