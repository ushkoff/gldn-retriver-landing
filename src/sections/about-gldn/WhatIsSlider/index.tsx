import React, { FC, useState } from 'react';
import cls from 'classnames';
import styles from './style.module.scss';
import config from '../../../config';

import Image from 'next/image';
import { Container } from '../../../layouts';
import GoldButton from '../../../components/ui/GoldButton';
import { useCheckMobileScreen } from '../../../hooks';
import Slider from './Slider';

const WhatIsSlider: FC = () => {
  const isMobile = useCheckMobileScreen({ breakpoint: 1200 });

  const [activeItem, setActiveItem] = useState(0);
  const items = [
      {
          title: 'PAXG Auto-Staking',
          description: <p>Gold Retriever (<b>$GLDN</b>) is a decentralized financial asset that utilizes volume to drive rewards back to its holders in the form of the gold-backed stablecoin PAX Gold (<strong>$PAXG</strong>). Gold Retriever provides $PAXG rewards to holders using transaction fees on all transactions. Through its unique Auto-Staking protocol, all one has to do is purchase, hold, and forget.</p>
      },
      {
          title: 'Volume based yield',
          description: <p>Rather than relying on revenue derived from aggressive token emissions to provide investors with yield like many unsuccessful DeFi projects of 2021, Gold Retriever aims to provide investors with volume-based yield in the form of a sustainable stablecoin. The success of Gold Retriever depends on its ability to accrue new users and increase transaction volume over time to reward token holders.</p>
      },
      {
          title: 'Commodity-backed ecosystem',
          description: <p>Holders of <strong>$GLDN</strong> will be a part of a much larger ecosystem where investors are rewarded with the hottest commodities, including precious metals, energy, grains, and more. <b>$GLDN</b> holders will get first access to future assets in Gold Retriever’s ever-growing ecosystem.</p>
      },
      {
          title: 'Non-profit donations',
          description: <p>As a nod to our namesake, we have allocated a portion of <strong>$GLDN</strong> tokens and transaction fees to donate to Golden Retriever and other dog rescues/non-profit charities.</p>
      },
  ];

  const buyGldnButton = () => (
    <GoldButton
        type='large'
        title={['Buy', 'GLDN']}
        action={() => console.log('Buy GLDN')}
    />
  );

  return (
      <section className='mb-8' id='whatIsSlider'>
          <Container>
              <h1 className={cls('uppercase md:text-6xl text-4xl font-bold', !isMobile && 'ml-10')}>What is <strong>GLDN?</strong></h1>

              {!isMobile ?
                  <div className={cls(styles.sliderContainer, 'mt-6')}>
                      <div className='grid grid-cols-10 gap-20 px-10 py-3 pb-10'>
                          <div className='col-span-6'>
                              <ul>
                                  {items.map((item, i) => (
                                      <li
                                          key={i}
                                          className={i === activeItem ? styles.active : ''}
                                          onClick={() => setActiveItem(i)}
                                      >
                                          {item.title}
                                      </li>
                                  ))}
                              </ul>
                          </div>

                          <div className='col-span-4 pt-2 pb-2'>
                              <div className={cls(styles.descContainer, 'py-3 px-5 h-full relative')}>
                                  {items[activeItem].description}
                                  <Image
                                      src='/img/logo.png'
                                      alt='logo'
                                      width={142}
                                      height={142}
                                  />
                              </div>
                          </div>
                      </div>
                  </div>
              : (
                  <Slider items={items} />
              )}

              <div className='md:mt-16 mt-8 flex items-center md:flex-row flex-col'>
                  <div className='md:block hidden'>
                      {buyGldnButton()}
                  </div>
                  <a
                      href={config.token.whitepaperUrl} target='_blank'
                      className='flex items-center md:ml-16 justify-center w-full md:w-auto'
                  >
                      <span className={cls(styles.readWhitepaper, 'block mr-4')}>Read our Whitepaper</span>
                      <Image
                          src='/img/icons/circle-arrow-right.png'
                          alt='Go'
                          width={32}
                          height={32}
                      />
                  </a>
                  <div className='md:hidden block mt-8'>
                      {buyGldnButton()}
                  </div>
              </div>
          </Container>
      </section>
  );
};

export default WhatIsSlider;