import React, { FC } from 'react';
import cls from 'classnames';
import styles from './style.module.scss';

import { Container } from '../../../layouts';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const items = [
    {
        title: <h6>How to buy <strong>GLDN</strong>?</h6>,
        description: '',
    },
    {
        title: <h6>The guide to Digital Gold</h6>,
        description: '',
    },
    {
        title: <h6>What is PAXG?</h6>,
        description: 'Pax Gold (PAXG) is a digital asset. Each token is backed by one fine troy ounce (t oz) of a 400 oz London Good Delivery gold bar, stored in Brink’s vaults...',
    },
    {
        title: <h6>What is PAXG?</h6>,
        description: 'Pax Gold (PAXG) is a digital asset. Each token is backed by one fine troy ounce (t oz) of a 400 oz London Good Delivery gold bar, stored in Brink’s vaults...',
    }
];

const Guides: FC = () => {
  return (
      <section className='md:mt-8 mt-6 mb-8' id='guides'>
          <Container>
              <h1 className='uppercase md:text-4xl text-3xl font-bold'>Guides</h1>

              <div className={cls(styles.slider, 'flex items-center mt-8')}>
                  <Swiper
                      modules={[Pagination]}
                      spaceBetween={50}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      breakpoints={{
                          640: {
                              slidesPerView: 1,
                          },
                          768: {
                              slidesPerView: 2,
                          },
                          1024: {
                              slidesPerView: 3,
                          },
                      }}
                  >
                      {items.map((item, i) => (
                          <SwiperSlide className={cls(styles.guide, 'py-3 px-6 cursor-pointer')} key={i}>
                              {item.title}
                              <p className='mt-8 leading-normal'>{item.description}</p>
                          </SwiperSlide>
                      ))}
                  </Swiper>
              </div>
          </Container>
      </section>
  );
};

export default Guides;