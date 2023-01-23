import React, { FC } from 'react';
import styles from './style.module.scss';

import Image from 'next/image';
import { Container } from '../../../layouts';

const Prices: FC = () => {
    return (
        <section className='mt-16 md:mb-52 mb-28' id='prices'>
            <h2 className='uppercase md:text-4xl text-3xl font-bold text-center mb-6'>Prices</h2>
            <div className={styles.blueStripe}>
                <span>PAXG Reserves: 301102.983 oz t.</span>
                <span>PAXG/USD: $1793.42</span>
                <span>GLDN/USD: $1.50</span>
                <span>XAU/USD: $1.50</span>
            </div>

            <Container>
                <div className='flex flex-col justify-center items-center mb-2'>
                    <Image
                        src='/img/GRDex.png'
                        alt='GRDex'
                        width={862}
                        height={445}
                    />
                    <div className='relative md:bottom-16 bottom-8 flex flex-col items-center justify-center'>
                        <span className='text-4xl font-bold leading-tight'>COMING<br className='md:hidden block'/>Q1 2023<br className='md:hidden block'/>PREVIEW</span>
                        <span className='text-2xl mt-6'>Over 25 Pairs To Be Added</span>
                    </div>
                </div>
            </Container>

            <div className={styles.blueStripe}>
                <span>GLDN/USD: $1.009</span>
                <span>GLDN/EUR: €0.950</span>
                <span>GLDN/GBP: £0.829</span>
                <span>GLDN/JPY: ¥138.040</span>
            </div>
        </section>
    );
}

export default Prices;