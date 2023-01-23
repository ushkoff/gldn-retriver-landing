import React, { FC } from 'react';
import styles from './style.module.scss';

import Image from 'next/image';
import { Container } from '../../../layouts';
import { SocialsWidget } from '../../../components';
import { useCheckMobileScreen } from '../../../hooks';

const Introduction: FC = () => {
  const isMobile = useCheckMobileScreen({ breakpoint: 768 });

  return (
      <section className='relative bottom-3 ' id='introduction'>
          {!isMobile && <SocialsWidget/>}
          <Container>
              <div className={styles.goldenStripe}><div></div></div>
              <h1 className='md:text-5xl text-4xl md:font-bold leading-tight mt-8'>How to buy <strong>GLDN?</strong></h1>
              <span className='md:text-2xl text-xl md:mt-5 mt-3 block'>A guide to buying GLDN</span>

              <p className='md:mt-12 mt-8 text-xl pr-5'>Lorem ipsum dolor sit amet consectetur. Velit et amet sed interdum id. Ac porttitor neque bibendum quam vitae lobortis lacinia neque. Proin natoque sit suspendisse felis. Imperdiet sem aliquam feugiat nisl lectus nascetur at.<br/>
                  Nisl tortor amet odio sed id ut. Ultrices ornare cras tellus donec non hendrerit accumsan. At euismod vulputate nunc egestas rutrum eu quam.</p>

              <div className='grid grid-cols-10 gap-8 mt-16'>
                <div className='lg:col-span-5 col-span-10 flex lg:justify-start justify-center'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src='/img/article_img.png'
                            alt='article-image'
                            width={509}
                            height={407}
                        />
                        <span className='block text-sm italic mt-3'>nec tempor mauris</span>
                    </div>
                </div>
                <div className='lg:col-span-5 col-span-10'>
                    <q className='lg:text-5xl text-4xl leading-normal font-semibold tracking-wide'>Tempus in<br/>lobortis justo<br/>volutpat. Laoreet<br/>sollicitudin mauris<br/>amet lectus velit</q>
                </div>
              </div>
          </Container>
      </section>
  );
};

export default Introduction;