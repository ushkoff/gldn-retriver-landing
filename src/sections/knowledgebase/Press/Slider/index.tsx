import React, { FC } from 'react';
import styles from '../style.module.scss';
import cls from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

type Props = {
    items: Array<{
        id: number,
        title: string,
        date: string,
        img: string,
        tags: Array<{ title: string, url: string }>,
        url: string
    }>
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
                    <SwiperSlide className={cls(styles.post, 'pb-2 mt-2')} key={i}>
                        <div
                            className={styles.post__image}
                            style={{backgroundImage: `url(${item.img})`}}
                        ></div>

                        <div className={cls(styles.post__content, 'px-4 pt-2 flex flex-col justify-between items-start')}>
                            <div className='flex items-center'>
                                {item.tags.map((tag, i) => (
                                    <a
                                        key={i}
                                        href={tag.url}
                                        className={styles.post__tag}
                                        target='_blank'
                                    >{tag.title}</a>
                                ))}
                            </div>

                            <Link href={item.url}>
                                <span className={styles.post__title}>{item.title}</span>
                            </Link>

                            <div>
                                <span className={styles.post__date}>{item.date}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;