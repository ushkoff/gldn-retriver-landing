import React, { FC } from 'react';
import cls from 'classnames';
import styles from '../style.module.scss';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { useFoldingText } from '../../../../hooks';

type Member = {
  name: string,
  position: string,
  img: string,
  description: string | JSX.Element
};

type Props = {
  members: {
      executives: Array<Member> | any,
      technology: Array<Member> | any
  }
};

const Slider: FC<Props> = ({ members }) => {
    return (
        <>
            <div>
                <h2 className='text-3xl font-semibold text-center'>Executives</h2>

                <div className={cls(styles.slider, 'mt-6')}>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        {members.executives.map((member, i) => (
                            <SwiperSlide className={cls(styles.post, 'pb-4 mt-2')} key={i}>
                                <div className='flex justify-center pt-5'>
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        width={246}
                                        height={290}
                                    />
                                </div>

                                <div className={cls(styles.post__content, 'px-4 pt-2 flex flex-col justify-between items-start')}>
                                    <span className={styles.post__title}>{member.name}</span>
                                    <span className='mt-2'>{member.position}</span>
                                    <div className='mt-2 text-lg'>
                                        {useFoldingText(member.description, 10)}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <h2 className='text-3xl font-semibold text-center mt-16'>Technology</h2>

                <div className={cls(styles.slider, 'mt-6')}>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        {members.technology.map((member, i) => (
                            <SwiperSlide className={cls(styles.post, 'pb-4 mt-2')} key={i}>
                                <div className='flex justify-center pt-5'>
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        width={246}
                                        height={290}
                                    />
                                </div>

                                <div className={cls(styles.post__content, 'px-4 pt-2 flex flex-col justify-between items-start')}>
                                    <span className={styles.post__title}>{member.name}</span>
                                    <span className='mt-2'>{member.position}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Slider;