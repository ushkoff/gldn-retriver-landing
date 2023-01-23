import { FC } from 'react';
import styles from './style.module.scss';

import { Container } from '../../../layouts';

const Advantages: FC = () => {
    return (
        <section className='md:mt-32 mt-20' id='advantages'>
            <Container>
                <div className='grid grid-cols-3 gap-8'>
                    <div className='md:col-span-1 col-span-3'>
                        <div className={styles.bgImage}></div>
                        <div className='w-full px-4 mt-10'>
                            <span className='uppercase font-bold'>SAFETY</span>
                            <p>Gold Retriever gives holders the stability of gold and the exponential growth opportunities of cryptocurrencies.</p>
                        </div>
                    </div>

                    <div className='col-span-1 hidden md:block'>
                        <div className={styles.bgImage}></div>
                        <div className='w-full px-4 mt-10'>
                            <span className='uppercase font-bold'>TOKEN</span>
                            <p>Gold Retriever ($GLDN) is an ERC-20 token on the Ethereum blockchain issued by Gold Retriever LLC.</p>
                        </div>
                    </div>

                    <div className='col-span-1 hidden md:block'>
                        <div className={styles.bgImage}></div>
                        <div className='w-full px-4 mt-10'>
                            <span className='uppercase font-bold'>ECOSYSTEM</span>
                            <p>An expanding commodities-based ecosystem that includes additional commodity assets such as precious metals, energy, grains, and more.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Advantages;