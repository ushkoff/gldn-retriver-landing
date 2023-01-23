import React, { FC } from 'react';

import { HomeLayout } from '../layouts';
import { Header, Footer } from '../components';
import { Introduction, Metrics, WhatIs, Advantages, Charity } from '../sections/main';
import { JoinUs } from '../sections/common';

const Home: FC = () => {
    return (
      <>
        <Header/>
        <HomeLayout>
            <Introduction/>
            <Metrics/>
            <WhatIs/>
            <Advantages/>
            <Charity/>
            <JoinUs/>
        </HomeLayout>
        <Footer/>
      </>
    );
}

export default Home;
