import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './style.module.scss';
import cls from 'classnames';
import config from '../../../config';
import Image from 'next/image';

import { Container } from '../../../layouts';
import GoldButton from '../../../components/ui/GoldButton';
import { useCheckMobileScreen } from '../../../hooks';
import { SocialsWidget } from '../../../components';

type Props = {
    hideMobileBtn: boolean;
}

const Introduction: FC<Props> = ({ hideMobileBtn }) => {
    const router = useRouter();
    const isMobile = useCheckMobileScreen({ breakpoint: 768 });
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyTokenAddress = () => {
        navigator.clipboard.writeText(config.token.address);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
    }

    const [openedDesc, setOpenedDesc] = useState(false);
    const handleOpenDesc = () => setOpenedDesc(opened => !opened);
    const description = () => (
        <p className={cls(styles.description, 'mt-12 pr-22')}>
            Gold Retriever is a decentralized financial asset that utilizes volume to
            drive rewards back to its holders in the form of the gold-backed stablecoin
            <strong> PAX Gold ($PAXG)</strong>.
            {(isMobile && !openedDesc) && (
                <Image
                    src='/img/icons/golden-plus.png'
                    alt='open'
                    width={19}
                    height={14}
                    onClick={handleOpenDesc}
                    className='inline-block ml-2 cursor-pointer'
                />
            )}
            {(openedDesc || !isMobile) && (<>
                <br/><br/>
                By combining the exponential growth opportunities found in
                cryptocurrencies with the stable reserve currency of gold, Gold Retriever makes
                it simple for users to purchase, hold, and start accumulating gold automatically.
            </>)}
        </p>
    );

    const tokenAddress = () => (
        <span>token address:
            <span className='ml-3'>0xFee...CC2</span>
            <div className='inline-block relative'>
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
        </span>
    );

    const buyGldnButton = () => (
        <GoldButton
            type='large'
            title={['Buy', 'GLDN']}
            action={() => router.push('/dapp')}
        />
    );

    return (
        <section className='pt-2 pb-10 relative' id='introduction'>
            {!isMobile && <SocialsWidget/>}
            <Container>
                <div className='grid grid-cols-5 gap-4'>
                    <div className='md:col-span-3 col-span-5'>
                        <h1 className={styles.title}>
                            DEFI’s FIRST<br/><strong>COMMODITIES-BASED</strong><br/>ECOSYSTEM
                        </h1>
                        {description()}
                    </div>

                    <div className='flex flex-col md:col-span-2 col-span-5 justify-start md:items-end items-center relative'>
                        <Image
                            src='/img/logo-animated.gif'
                            alt='logo'
                            width={!isMobile ? 435 : 335}
                            height={!isMobile ? 435 : 335}
                            placeholder='blur'
                            blurDataURL='/img/logo.png'
                        />
                        {(isMobile && !hideMobileBtn) && <div className='z-50 bg-black/[0.8] w-full flex justify-center items-center h-24 fixed bottom-0 left-0 right-0' style={{boxShadow: '0px 0px 30px 20px black'}}>
                            {buyGldnButton()}
                        </div>}
                        <div className='flex w-full justify-center md:mt-8 mt-4 pl-2'>
                            {tokenAddress()}
                        </div>
                    </div>
                </div>

                <div className='md:mt-16 mt-8 flex items-center'>
                    {!isMobile && buyGldnButton()}
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
                </div>
            </Container>
        </section>
    );
};

export default Introduction;