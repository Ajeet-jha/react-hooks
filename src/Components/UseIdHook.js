import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import UseIdMarkdown from '../Markdown/UseId.md';
import UserIdHookDemo from '../Demos/UseIdHook/UserIdHook';
/* eslint-disable react/no-children-prop */
function UseIdHook() {
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		fetch(UseIdMarkdown)
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<>
			<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
			<UserIdHookDemo />
		</>
	);
}

export default UseIdHook;
