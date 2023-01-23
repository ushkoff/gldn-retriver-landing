import React, { FunctionComponent } from 'react';

import '../styles/main.scss';

import { AppProps } from 'next/app';
import { FontProvider } from '../providers';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <FontProvider>
            <Component {...pageProps} />
        </FontProvider>
    );
};

export default MyApp;