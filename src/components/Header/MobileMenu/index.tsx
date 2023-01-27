import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './style.module.scss';

import GoldButton from '../../ui/GoldButton';
import Link from 'next/link';

type Props = {
    children: React.ReactNode
}

const MobileMenu: FC<Props> = ({ children }) => {
    const router = useRouter();
    const [isOpened, setIsOpened] = useState(false);
    const handleOpenMenu = () => setIsOpened(isOpened => !isOpened);

    return (
        <div>
            <div className='h-10 flex justify-between items-center'>
                <div className="uppercase"><Link href='/'>Gold Retriever</Link></div>

                <div
                    onClick={handleOpenMenu}
                    className={styles.burgerButton}
                >
                    <span></span>
                </div>
            </div>

            {isOpened && (
                <div>

                    {children}

                    <GoldButton
                        title={['Launch', 'App']}
                        action={() => router.push('/dapp')}
                        className='mt-4'
                    />
                </div>
            )}
        </div>
    );
}

export default MobileMenu;