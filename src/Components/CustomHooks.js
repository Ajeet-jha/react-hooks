import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import CustomHookMarkdown from '../Markdown/CustomHook.md';
import CustomHookDemo from '../Demos/CustomHooks';

function UseIdHook() {
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		fetch(CustomHookMarkdown)
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<>
			<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
			<CustomHookDemo />
		</>
	);
}

export default UseIdHook;
