import React, { FC } from 'react';
import styles from './style.module.scss';
import cls from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { useCheckMobileScreen } from '../../hooks';
import { Container } from '../../layouts';
import GoldButton from '../ui/GoldButton';

const Footer: FC = () => {
    const isMobile = useCheckMobileScreen({ breakpoint: 976 });

    return (
        <>
            {!isMobile ? (
                <footer className={cls(styles.footer, 'h-24 flex items-center')}>
                    <Container>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <Image
                                    src='/img/logo-small.png'
                                    alt='logo'
                                    width={70}
                                    height={70}
                                    className='mr-10'
                                />
                                <span className='block'>Gold Retriever All Rights Reserved © 2022</span>
                            </div>

                            <ul className='flex'>
                                <li className='mr-11'><Link href='#'>Disclaimer</Link></li>
                                <li><Link href='#'>Privacy Policy</Link></li>
                            </ul>

                            <div className='flex items-center'>
                                <GoldButton
                                    title={['Buy', 'GLDN']}
                                    action={() => console.log('Buy GLDN')}
                                    className='mr-6'
                                />
                                <GoldButton
                                    title={['Launch', 'APP']}
                                    action={() => console.log('Launch App')}
                                />
                            </div>
                        </div>
                    </Container>
                </footer>
            ) : (
                <footer className='pt-3'>
                    <Container>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <Image
                                    src='/img/logo-small.png'
                                    alt='logo'
                                    width={45}
                                    height={45}
                                    className='mr-2'
                                />
                                <span className='block text-sm leading-4'>Gold<br/>Retriever</span>
                            </div>

                            <div className='flex items-center'>
                                <GoldButton
                                    title={['BUY']}
                                    action={() => console.log('Buy GLDN')}
                                    className='mr-6'
                                />
                                <GoldButton
                                    title={['DAPP']}
                                    action={() => console.log('Launch App')}
                                />
                            </div>
                        </div>
                        <div className='flex justify-between items-center text-xs sm:py-3 py-2'>
                            <span className='block'>All Rights Reserved © 2022</span>
                            <div className='flex items-center'>
                                <li className='mr-5'><Link href='#'>Disclaimer</Link></li>
                                <li><Link href='#'>Privacy Policy</Link></li>
                            </div>
                        </div>
                    </Container>
                </footer>
            )}
        </>
    );
}

export default Footer;