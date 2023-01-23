import React, { FC, useState } from 'react';
import cls from 'classnames';
import styles from './style.module.scss';

import GoldButton from '../../ui/GoldButton';
import Image from 'next/image';
import Link from 'next/link';

const MobileMenu: FC = () => {
    const [isOpened, setIsOpened] = useState(false);
    const handleOpenMenu = () => setIsOpened(isOpened => !isOpened);

    const handleOpenDropDown = (event: any) => {
        const btn = event.currentTarget;
        btn.querySelector('img').classList.toggle(styles.arrowActive);
        btn.nextSibling.classList.toggle('hidden');
    }

    const arrow = <Image
        src='/img/icons/arrow-down.png'
        alt='\/'
        width={11}
        height={7}
        className={cls(styles.arrow, 'block ml-2 mt-2')}
    />;

    const menuItem = (title: string, link: string | null, nestedItems?: Array<{title: string, link: string}>) => (
        <li>
            {nestedItems.length === 0 ?
                <Link href={link}>{title}</Link>
                :
                <>
                    <div
                        onClick={handleOpenDropDown}
                        className='flex items-center cursor-pointer'
                    >
                        <a>{title}</a>
                        {arrow}
                    </div>
                    <div className='hidden'>
                        <ul className={styles.nestedMenu}>
                            {nestedItems.map((item, idx) => (
                                <li key={idx}>
                                    <Link href={item.link}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            }
        </li>
    );

    return (
        <div>
            <div className='h-10 flex justify-between items-center'>
                <div className="uppercase">Gold Retriever</div>

                <div
                    onClick={handleOpenMenu}
                    className={styles.burgerButton}
                >
                    <span></span>
                </div>
            </div>

            {isOpened && (
                <div>
                    <ul className={styles.menu}>
                        {menuItem('Ecosystem', null, [
                            {title: 'Gold Retriever', link: '#'},
                            {title: 'Blu Arctic', link: '#'},
                            {title: 'Silver Stable', link: '#'},
                            {title: 'Exchange', link: '#'}
                        ])}

                        {menuItem('Company', null, [
                            {title: 'Team', link: '#'},
                            {title: 'Roadmap', link: '#'},
                            {title: 'FAQs', link: '#'}
                        ])}

                        {menuItem('Learn', '#', [])}
                    </ul>

                    <GoldButton
                        title={['Launch', 'App']}
                        action={() => console.log('Launch App')}
                        className='mt-4'
                    />
                </div>
            )}
        </div>
    );
}

export default MobileMenu;