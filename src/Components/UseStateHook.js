import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import UseStateMarkdown from '../Markdown/UseState.md';
// import UseStateHookDemo from '../Demos/UseStateHook/UseStateHook0';
// import UseStateHookDemo from '../Demos/UseStateHook/UseStateHook1';
import UseStateHookDemo from '../Demos/UseStateHook/UseStateHook';
/* eslint-disable react/no-children-prop */
function UseStateHook() {
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		fetch(UseStateMarkdown)
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<>
			<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
			<UseStateHookDemo />
		</>
	);
}

export default UseStateHook;
