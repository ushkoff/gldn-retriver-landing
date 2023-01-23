import React, { FC } from 'react';
import cls from 'classnames';
import styles from './styles.module.scss';

import config from '../../../config';
import Image from 'next/image';
import { Container } from '../../../layouts';
import { SocialsWidget } from '../../../components';
import { useCheckMobileScreen } from '../../../hooks';

import GoldButton from '../../../components/ui/GoldButton';

const Introduction: FC = () => {
    const isMobile = useCheckMobileScreen({ breakpoint: 768 });

    const buyGldnButton = () => (
        <GoldButton
            type='large'
            title={['Buy', 'GLDN']}
            action={() => console.log('Buy GLDN')}
        />
    );

    return (
        <section className='pt-2 pb-10 relative' id='introduction'>
            {!isMobile && <SocialsWidget/>}
            <Container>
                <div className='grid grid-cols-6 gap-4'>
                    <div className='lg:col-span-4 col-span-6'>
                        <h1 className='text-6xl uppercase font-bold leading-tight md:block hidden'><strong>Gold</strong> retriever<br/>knowledgebase</h1>
                        <h1 className='text-4xl uppercase font-bold leading-tight md:hidden block'><strong>Gold retriever</strong><br/>knowledgebase</h1>
                        <p className='mt-6'>Gold Retriever ($GLDN) is a decentralized financial asset that utilizes volume to drive rewards back to its holders in the form of the gold-backed stablecoin PAX Gold ($PAXG).</p>

                        <div className='mt-16 flex items-center md:flex-row flex-col'>
                            <div className='md:block hidden'>
                                {buyGldnButton()}
                            </div>
                            <a
                                href={config.token.whitepaperUrl} target='_blank'
                                className='flex items-center md:ml-16 justify-center w-full md:w-auto'
                            >
                                <span className={cls(styles.readWhitepaper, 'block mr-4')}>Read our Whitepaper</span>
                                <Image
                                    src='/img/icons/circle-arrow-right.png'
                                    alt='Go'
                                    width={32}
                                    height={32}
                                />
                            </a>
                            <div className='md:hidden block mt-8'>
                                {buyGldnButton()}
                            </div>
                        </div>
                    </div>

                    <div className='md:col-span-2 col-span-6 md:block hidden'>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Introduction;