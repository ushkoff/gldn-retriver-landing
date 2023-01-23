import React, { FC } from 'react';
import cls from 'classnames';
import styles from './style.module.scss';

import { Container } from '../../../layouts';

const Metrics: FC = () => {
  return (
      <section className='lg:mt-24 mt-10' id='metrics'>
          <Container>
              <div className={cls(styles.metricsBg, 'w-full grid lg:grid-cols-5 grid-cols-4 text-2xl')}>
                  <div className='lg:block hidden col-span-1 text-center'>$15,538,896.36</div>
                  <div className='lg:col-span-1 col-span-2 text-center'>10,500,000</div>
                  <div className='lg:col-span-1 col-span-2 text-center'>$5.17</div>
                  <div className='lg:block hidden col-span-1 text-center'>$959,621.73</div>
                  <div className='lg:block hidden col-span-1 text-center'>$889,471.33</div>
              </div>
              <div className='w-full grid lg:grid-cols-5 grid-cols-4 mt-4'>
                  <div className='clg:block hidden col-span-1 text-center'>Market Cap</div>
                  <div className='lg:col-span-1 col-span-2 text-center'>Circulating<br/>Supply</div>
                  <div className='lg:col-span-1 col-span-2 text-center'>All Time<br/>High</div>
                  <div className='lg:block hidden col-span-1 text-center'>Total <strong>$PAXG</strong><br/>Realized</div>
                  <div className='lg:block hidden col-span-1 text-center'>Total Dividend<br/>Distributed</div>
              </div>
          </Container>
      </section>
  );
};

export default Metrics;