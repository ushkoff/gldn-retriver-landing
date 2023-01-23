import React, { FC } from 'react';
import cls from 'classnames';
import styles from './style.module.scss';

import GoldButton from '../../ui/GoldButton';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    withPrice?: boolean;
}

const DesktopMenu: FC<Props> = ({ withPrice }) => {
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
                    <div className='hidden absolute'>
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
        <div className='h-20 flex justify-between items-center'>


            {withPrice ? (
                <div className='flex items-center'>
                    <div className='uppercase mr-8'>Gold Retriever</div>
                    <div>
                        <span>$1.0767</span>
                        <span className='ml-3 text-xs'>
                            <span className='mr-1 text-green-600'>+0.1022</span>
                            (<span className='text-green-600'>+8.67%</span>)
                        </span>
                    </div>
                </div>
            ) : (
                <div className="uppercase">Gold Retriever</div>
            )}

            <div className='h-20 flex justify-between items-center'>
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
                    title={['Launch', 'APP']}
                    action={() => console.log('Launch App')}
                    className='ml-20'
                />
            </div>
        </div>
    );
}

export default DesktopMenu;