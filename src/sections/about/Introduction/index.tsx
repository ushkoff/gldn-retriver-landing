import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import cls from 'classnames';
import styles from './style.module.scss';

import Image from 'next/image';
import config from '../../../config';
import { Container } from '../../../layouts';
import GoldButton from '../../../components/ui/GoldButton';
import { SocialsWidget } from '../../../components';
import { useCheckMobileScreen } from '../../../hooks';

const Introduction: FC = () => {
    const router = useRouter();
    const isMobile = useCheckMobileScreen({ breakpoint: 768 });
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyTokenAddress = () => {
        navigator.clipboard.writeText(config.token.address);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
    }

    const tokenAddress = () => (
        <div className='flex items-center md:justify-start justify-center'>
            <span>token address:
            <div className={cls(styles.tokenAddressWrapper, 'inline-block ml-2 pr-3 py-2')}>
                <span className='ml-3'>0xFee...CC2</span>
                <div className='inline-block relative ml-2'>
                    {isCopied && (
                        <span className='block absolute bottom-6 left-2.5 text-sm bg-slate-700 p-2 rounded'>
                            Copied!
                        </span>
                    )}
                    <Image
                        src='/img/icons/copy.png'
                        alt='copy'
                        width={18}
                        height={20}
                        onClick={handleCopyTokenAddress}
                        className='ml-2 relative top-0.5 cursor-pointer'
                    />
                </div>
            </div>
        </span>
        </div>
    );

    const buyGldnButton = () => (
        <GoldButton
            type='large'
            title={['Buy', 'GLDN']}
            action={() => router.push('/dapp')}
        />
    );

    return (
        <section className='md:mt-8 mb-14' id='introduction'>
            {!isMobile && <SocialsWidget/>}
            <Container>
                <h1 className='text-6xl uppercase font-bold leading-tight md:block hidden'>About <strong>Gold Retriever</strong></h1>
                <h1 className='text-4xl uppercase font-bold leading-tight md:hidden block'>About<br/><strong>Gold<br/>Retriever</strong></h1>

                <div className='mt-4'>
                    {tokenAddress()}
                </div>

                <p className='text-xl md:mt-10 mt-8 md:pr-44'>Gold Retriever is taking the lead on bringing commodities to the blockchain. Gold Retriever's flagship token is $GLDN, a decentralized financial asset that rewards its holders in the form of the gold-backed stablecoin PAX Gold. Gold Retriever is building DeFi's first commodities-based ecosystem with the Gold Retriever token at the center of it all.</p>

                <div className='md:mt-16 mt-12 flex items-center md:flex-row flex-col'>
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
            </Container>
        </section>
    );
};

export default Introduction;