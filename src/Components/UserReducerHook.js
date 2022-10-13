import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import UseReducerMarkdown from '../Markdown/UseReducer.md';
// import UseReducerHookDemo from '../Demos/UseReducerHook/UseReducerHook';
// import UseReducerHookDemo from '../Demos/UseReducerHook/UseReducerHook1';
import UseReducerHookDemo from '../Demos/UseReducerHook/UseReducerHook2';

function UseRefHook() {
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		fetch(UseReducerMarkdown)
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<>
			<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
			<UseReducerHookDemo />
		</>
	);
}

export default UseRefHook;
