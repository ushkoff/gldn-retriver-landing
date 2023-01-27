import React, { FC } from 'react';
import cls from 'classnames';
import styles from './style.module.scss';

import { Container } from '../../../layouts';

import Link from 'next/link';
import GoldButton from '../../../components/ui/GoldButton';
import { useCheckMobileScreen } from '../../../hooks';
import Slider from './Slider';

const items = [
    {
        id: 123,
        title: 'Gold Retriever Welcomes William Noble to the Team as Director of Market Research',
        date: 'December 15, 2022',
        img: '/img/post.jpg',
        tags: [
            {title: 'accesswire', url: 'https://uniswap.org/'}
        ],
        url: '/article'
    },
    {
        id: 1234,
        title: 'Gold Retriever Welcomes William Noble to the Team as Director of Market Research',
        date: 'December 12, 2022',
        img: '/img/post.jpg',
        tags: [
            {title: 'accesswire', url: 'https://uniswap.org/'}
        ],
        url: '/article'
    }
];

const Press: FC = () => {
  const isMobile = useCheckMobileScreen({ breakpoint: 1175 });

  return (
      <section className='md:mt-28 mt-20 mb-16' id='knowledgebase'>
          <Container>
              <h1 className='uppercase md:text-4xl text-3xl font-bold'>Press</h1>

              {!isMobile ? (
                  <div className='flex items-start justify-between flex-wrap'>
                      {items.map(item => (
                          <div
                              key={item.id}
                              className={cls(styles.post, 'pb-2 mt-8')}
                          >
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
                          </div>
                      ))}
                  </div>
              ) : (
                  <div>
                      <Slider items={items} />
                  </div>
              )}

              <div className='flex items-center justify-center md:mt-16 mt-8'>
                  <GoldButton
                      type='large'
                      title={['Read', 'MORE']}
                      action={() => console.log('Read more...')}
                  />
              </div>
          </Container>
      </section>
  );
};

export default Press;