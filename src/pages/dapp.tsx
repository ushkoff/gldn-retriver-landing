import { FC } from 'react';

import { EmptyLayout } from '../layouts';

import { Header, Dashboard } from '../sections/dapp';

const Article: FC = () => {
    return (
        <>
            <EmptyLayout>
                <Header/>
                <Dashboard/>
            </EmptyLayout>
        </>
    );
}

export default Article;
