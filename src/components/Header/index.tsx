import React, { FC } from 'react';

import { Container } from '../../layouts';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { useCheckMobileScreen } from '../../hooks';

type Props = {
    withPrice?: boolean;
}

const Header: FC<Props> = ({ withPrice }) => {
  const isMobile = useCheckMobileScreen({ breakpoint: withPrice ? 971 : 768 });

  return (
    <header className='pb-5'>
        <Container>
            {!isMobile ? <DesktopMenu withPrice={withPrice} /> : <MobileMenu />}
        </Container>
    </header>
  );
};

export default Header;