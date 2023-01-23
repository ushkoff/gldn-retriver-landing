import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Image from 'next/image';

const jsxParagraphToString = (txt: JSX.Element) => {
    const text = ReactDOMServer.renderToStaticMarkup(txt);
    return text.replaceAll('<br/>', ' ');
}

const useFoldingText = (txt: any, wordsNum: number) => {
    const text = typeof txt === 'object' ? jsxParagraphToString(txt) : txt;
    const words = String(text).split(' ');
    const previewText = words.slice(0, wordsNum).join(' ');

    const openFullText = (event: any) => {
        const parent = event.currentTarget.parentNode.parentNode;
        const [preview, fullText] = parent.querySelectorAll('p');
        preview.classList.add('hidden');
        fullText.classList.remove('hidden');
    };

    return (
        <>
            <p className='block'>
                {previewText} ...
                <Image
                    src='/img/icons/golden-plus.png'
                    alt='read more...'
                    width={19}
                    height={14}
                    className='inline-block ml-2 cursor-pointer'
                    onClick={openFullText}
                />
            </p>
            <p className='hidden'>
                {text}
            </p>
        </>
    )
}

export default useFoldingText;
