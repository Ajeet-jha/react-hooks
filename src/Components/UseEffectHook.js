import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import UseEffectMarkdown from '../Markdown/UseEffect.md';
import UseEffectHookDemo from '../Demos/UseEffectHook/UseEffectHook';
// import UseEffectHookDemo from '../Demos/UseEffectHook/UseEffectHook0';
// import UseEffectHookDemo from '../Demos/UseEffectHook/UseEffectHook1';
// import UseEffectHookDemo from '../Demos/UseEffectHook/UseEffectHook2';
// import UseEffectHookDemo from '../Demos/UseEffectHook/UseEffectHook3';
/* eslint-disable react/no-children-prop */
function UseEffectHook() {
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		fetch(UseEffectMarkdown)
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<>
			<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
			<UseEffectHookDemo />
		</>
	);
}

export default UseEffectHook;
