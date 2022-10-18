import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import MemoMarkdown from '../Markdown/Memo.md';
import MemoDemo from '../Demos/Memo/Parent';

function UseMemoHook() {
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		fetch(MemoMarkdown)
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<>
			<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
			<MemoDemo />
		</>
	);
}

export default UseMemoHook;
