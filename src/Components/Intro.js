import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import IntroMarkdown from '../Markdown/Intro.md';

function Intro() {

    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        fetch(IntroMarkdown)
            .then(res => res.text())
            .then(text => setMarkdown(text)
        );
    }, []);

    return (
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    );

}

export default Intro;
