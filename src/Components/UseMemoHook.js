import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import UseMemoMarkdown from '../Markdown/UseMemo.md';
import UserMemoHookDemo from '../Demos/UseMemoHook/UseMemoHook';
// import UserMemoHookDemo from '../Demos/UseMemoHook/UseMemoHook1';
// import UserMemoHookDemo from '../Demos/UseMemoHook/UseMemoHook2';

function UseMemo() {
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		fetch(UseMemoMarkdown)
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<>
			<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
			<UserMemoHookDemo />
		</>
	);
}

export default UseMemo;
