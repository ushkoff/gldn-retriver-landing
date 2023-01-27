import React, { FC } from 'react';
import config from '../../config';
import cls from 'classnames';
import styles from './style.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../../layouts';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { useCheckMobileScreen } from '../../hooks';

type Props = {
    withPrice?: boolean;
}

const Header: FC<Props> = ({ withPrice }) => {
  const isMobile = useCheckMobileScreen({ breakpoint: withPrice ? 971 : 768 });

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
                    <div className={cls('hidden', !isMobile ? 'absolute' : '')}>
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

  const menu = (className: string) => (
      <ul className={className}>
          {menuItem('Ecosystem', null, [
              {title: 'Gold Retriever', link: '/about'},
              {title: 'GLDN', link: '/about-gldn'},
              {title: 'Article', link: '/article'},
              {title: 'DApp Exchange', link: '/dapp'}
          ])}

          {menuItem('Company', null, [
              {title: 'Team', link: '/team'},
              {title: 'Whitepaper', link: config.token.whitepaperUrl},
              {title: 'FAQs', link: '/learn'}
          ])}

          {menuItem('Learn', '/learn', [])}
      </ul>
  );

  return (
    <header className='pb-5'>
        <Container>
            {!isMobile ? (
                <DesktopMenu withPrice={withPrice}>
                    {menu(styles.menu)}
                </DesktopMenu>
            ) : (
                <MobileMenu>
                    {menu(styles.mobileMenu)}
                </MobileMenu>
            )}
        </Container>
    </header>
  );
};

export default Header;