import React, { FC } from 'react';
import cls from 'classnames';
import styles from './style.module.scss';

import Link from 'next/link';
import { Container } from '../../../layouts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const items = [
    {
        id: 123,
        title: 'Can I swap PAXG to GLDN on uniswap?',
        date: 'December 15, 2022',
        img: '/img/post.jpg',
        tags: [
            {title: 'uniswap', url: 'https://uniswap.org/'},
            {title: 'paxg', url: 'https://uniswap.org/'}
        ],
        url: 'https://www.google.com'
    },
    {
        id: 1234,
        title: 'Is crypto a security or commodity and how to differentiate?',
        date: 'December 12, 2022',
        img: '/img/post.jpg',
        tags: [
            {title: 'commodities', url: 'https://uniswap.org/'},
            {title: 'securities', url: 'https://uniswap.org/'}
        ],
        url: 'https://www.google.com'
    },
    {
        id: 12345,
        title: 'How to buy digital gold?',
        date: 'November 22, 2022',
        img: '/img/post.jpg',
        tags: [
            {title: 'digital gold', url: 'https://uniswap.org/'},
            {title: 'purchasing', url: 'https://uniswap.org/'}
        ],
        url: 'https://www.google.com'
    },
    {
        id: 12346,
        title: 'Can I swap PAXG to GLDN on uniswap?',
        date: 'December 15, 2022',
        img: '/img/post.jpg',
        tags: [
            {title: 'uniswap', url: 'https://uniswap.org/'},
            {title: 'paxg', url: 'https://uniswap.org/'}
        ],
        url: 'https://www.google.com'
    },
    {
        id: 12347,
        title: 'Can I swap PAXG to GLDN on uniswap?',
        date: 'December 15, 2022',
        img: '/img/post.jpg',
        tags: [
            {title: 'uniswap', url: 'https://uniswap.org/'},
            {title: 'paxg', url: 'https://uniswap.org/'}
        ],
        url: 'https://www.google.com'
    },
    {
        id: 12348,
        title: 'Can I swap PAXG to GLDN on uniswap?',
        date: 'December 15, 2022',
        img: '/img/post.jpg',
        tags: [
            {title: 'uniswap', url: 'https://uniswap.org/'},
            {title: 'paxg', url: 'https://uniswap.org/'}
        ],
        url: 'https://www.google.com'
    }
];

const RelatedArticles: FC = () => {
    return (
        <section className='lg:mt-44 md:mt-28 mt-12 md:mb-36 mb-20' id='relatedArticles'>
            <Container>
                <h1 className='uppercase md:text-4xl text-3xl font-bold'>Related Articles</h1>

                <div>
                    <div className={cls(styles.slider, 'mt-6')}>
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
                                1124: {
                                    slidesPerView: 3,
                                },
                            }}
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
                </div>
            </Container>
        </section>
    );
}

export default RelatedArticles;