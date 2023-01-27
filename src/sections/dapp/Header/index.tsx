import React, { FC } from 'react';
import styles from './style.module.scss';

import { Container } from '../../../layouts';
import Link from 'next/link';
import GoldButton from '../../../components/ui/GoldButton';

const navigation = [
    { title: 'Home', path: '/' }
];

const Header: FC = () => {
  return (
      <header className='pb-3'>
          <Container wide={true}>
              <div className='flex justify-between items-start pt-5'>
                  <div className={styles.logo}>
                      <h1 className='block uppercase text-5xl font-bold'>Gold Retriever</h1>
                      <h2 className='block uppercase font-bold text-2xl ml-1'>Dashboard</h2>
                  </div>

                  <div className='flex items-center'>
                      <ul>
                          {navigation.map((item, idx) => (
                              <li key={idx}>
                                  <Link href={item.path}>{item.title}</Link>
                              </li>
                          ))}
                      </ul>

                      <GoldButton
                          title={['0xFeeB4D0f5463B1b04351823C246bdB84c4320CC2']}
                          action={() => console.log('Launch app')}
                          className='ml-10'
                          textBase={true}
                      />
                  </div>
              </div>
          </Container>
      </header>
  );
};

export default Header;