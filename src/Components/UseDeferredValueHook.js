import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import useDeferredValueMarkdown from '../Markdown/UseDeferredValue.md';
import UseDeferredValueHookDemo from '../Demos/UseDeferredValueHook/UseDeferredValueHook';
// import UseDeferredValueHookDemo from '../Demos/UseDeferredValueHook/UseDeferredValueHook1';
// import UseDeferredValueHookDemo from '../Demos/UseDeferredValueHook/UseDeferredValueHook2';

function UseDeferredValueHook() {
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		fetch(useDeferredValueMarkdown)
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<>
			<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
			<UseDeferredValueHookDemo />
		</>
	);
}

export default UseDeferredValueHook;
