import { FC } from 'react';

import { HomeLayout } from '../layouts';
import { Header, Footer } from '../components';
import { Content, Members, Introduction } from '../sections/team';
import { JoinUs } from '../sections/common';

const Team: FC = () => {
    return (
        <>
            <Header/>
            <HomeLayout>
                <Introduction/>
                <Content/>
                <Members/>
                <JoinUs/>
            </HomeLayout>
            <Footer/>
        </>
    );
}

export default Team;
