import { FC } from 'react';

import { HomeLayout } from '../layouts';
import { Header, Footer } from '../components';
import { Introduction, Guides, Knowledgebase, Press, ReadWhitepaper } from '../sections/knowledgebase';
import { JoinUs } from '../sections/common';

const Learn: FC = () => {
    return (
        <>
            <Header/>
            <HomeLayout>
                <Introduction/>
                <Guides/>
                <Knowledgebase/>
                <Press/>
                <ReadWhitepaper/>
                <JoinUs/>
            </HomeLayout>
            <Footer/>
        </>
    );
}

export default Learn;
