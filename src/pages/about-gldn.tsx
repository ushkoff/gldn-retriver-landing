import React, { FC } from 'react';

import { HomeLayout } from '../layouts';
import { Header, Footer } from '../components';
import { WhatIsSlider, Chart, FAQ } from '../sections/about-gldn';

const AboutGldn: FC = () => {
    return (
        <>
            <Header withPrice={true}/>
            <HomeLayout>
                <WhatIsSlider/>
                <Chart/>
                <FAQ/>
            </HomeLayout>
            <Footer/>
        </>
    );
}

export default AboutGldn;
