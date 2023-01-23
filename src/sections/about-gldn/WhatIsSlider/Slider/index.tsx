import React, { FC } from 'react';
import styles from './style.module.scss';
import cls from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

type Props = {
    items: Array<{ title: string, description: JSX.Element }>
}

const Slider: FC<Props> = ({ items }) => {
    return (
        <div className={cls(styles.slider, 'mt-6')}>
            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {items.map((item, i) => (
                    <SwiperSlide className={cls(styles.sliderElement, 'pb-10')} key={i}>
                        <h6>{item.title}</h6>
                        {item.description}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;