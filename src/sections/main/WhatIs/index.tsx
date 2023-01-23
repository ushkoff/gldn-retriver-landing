import { FC } from 'react';
import styles from './style.module.scss';
import cls from 'classnames';
import config from '../../../config';

import { Container } from '../../../layouts';

const WhatIs: FC = () => {
    return (
        <section className='md:mt-40 mt-28' id='whatIsGLDN'>
            <Container>
                <h3 className='uppercase md:text-5xl text-3xl font-bold leading-relaxed'>What is <strong>Gold</strong><br className='md:hidden'/> retriever</h3>
                <div className='grid grid-cols-10 w-full md:mt-10 mt-8'>
                    <div className='md:col-span-6 col-span-10'>
                        <p>
                            Gold Retriever provides investors with volume-based yield in the form of a sustainable stablecoin that rewards <strong>$PAXG</strong> using Gold Retriever’s innovative staking protocol. The rewards accrue on every transaction, with 10% accrual on every purchase and 5% on every sale, distributed to every holder.
                        </p>
                    </div>
                </div>
                <div className={cls(styles.videoContainer, 'mt-12')}>
                    <iframe width="100%" height="100%" src={config.about.youtubeVideoUrl}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                    ></iframe>
                </div>
            </Container>
        </section>
    );
};

export default WhatIs;