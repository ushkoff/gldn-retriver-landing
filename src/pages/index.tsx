import React, { FC, useRef } from 'react';
import { useIsVisible } from '../hooks';

import { HomeLayout } from '../layouts';
import { Header, Footer } from '../components';
import { Introduction, Metrics, WhatIs, Advantages, Charity } from '../sections/main';
import { JoinUs } from '../sections/common';

const Home: FC = () => {
    const joinUsRef = useRef();
    const isJoinUsVisible = useIsVisible(joinUsRef);

    return (
      <>
        <Header/>
        <HomeLayout>
            <Introduction hideMobileBtn={isJoinUsVisible}/>
            <Metrics/>
            <WhatIs/>
            <Advantages/>
            <Charity/>
            <JoinUs ref={joinUsRef}/>
        </HomeLayout>
        <Footer/>
      </>
    );
}

export default Home;
