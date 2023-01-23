import { FC } from 'react';

import { HomeLayout } from '../layouts';
import { Header, Footer } from '../components';
import { Content, Introduction, Prices } from '../sections/about';
import { JoinUs } from '../sections/common';

const About: FC = () => {
    return (
        <>
            <Header/>
            <HomeLayout>
                <Introduction/>
                <Content/>
                <Prices/>
                <JoinUs/>
            </HomeLayout>
            <Footer/>
        </>
    );
}

export default About;
