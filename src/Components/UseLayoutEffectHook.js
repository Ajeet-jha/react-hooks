import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import UseLayoutEffectkMarkdown from '../Markdown/UseLayoutEffect.md';
import UseLayoutEffectkHookDemo from '../Demos/UseLayoutEffectHook/UseLayoutEffectHook';

function UseLayoutEffect() {
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		fetch(UseLayoutEffectkMarkdown)
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<>
			<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
			<UseLayoutEffectkHookDemo />
		</>
	);
}

export default UseLayoutEffect;
