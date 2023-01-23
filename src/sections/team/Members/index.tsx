import { FC } from 'react';

import Image from 'next/image';
import { Container } from '../../../layouts';
import { useCheckMobileScreen } from '../../../hooks';
import Slider from './Slider';

const executives = [
    {
        name: 'Seth Weiser',
        position: 'CEO',
        img: '/img/team/SethWeiser.png',
        description: 'Seth’s interest in markets and tech developed while earning his Finance degree at The George Washington University. Seth was responsible for developing one of the first online trading games in 1996 for AOL. Immediately after graduation, Seth worked in index arbitrage trading on S&P 500 Futures on the floor of the American Stock Exchange in NYC...'
    },
    {
        name: 'Dana Howell',
        position: 'CFO',
        img: '/img/team/DanaHowell.png',
        description: <>Interdum vel consectetur nec tempor mauris eget lobortis bibendum commodo. Praesent quam risus sed posuere donec et ac diam.<br/><br/>Ullamcorper sollicitudin et nunc varius sed purus scelerisque nunc. Vitae leo at tempus eu scelerisque faucibus euismod. Vitae est nulla scelerisque gravida. Rhoncus donec ridiculus in vel.</>
    },
    {
        name: 'Nick Venezia',
        position: 'COO',
        img: '/img/team/NickVenezia.png',
        description: <>Interdum vel consectetur nec tempor mauris eget lobortis bibendum commodo. Praesent quam risus sed posuere donec et ac diam.<br/><br/>Ullamcorper sollicitudin et nunc varius sed purus scelerisque nunc. Vitae leo at tempus eu scelerisque faucibus euismod. Vitae est nulla scelerisque gravida. Rhoncus donec ridiculus in vel.</>
    },
    {
        name: <>William<br/>Noble</>,
        position: 'Investor',
        img: '/img/team/WilliamNoble.png',
        description: <>Interdum vel consectetur nec tempor mauris eget lobortis bibendum commodo. Praesent quam risus sed posuere donec et ac diam.<br/><br/>Ullamcorper sollicitudin et nunc varius sed purus scelerisque nunc. Vitae leo at tempus eu scelerisque faucibus euismod. Vitae est nulla scelerisque gravida. Rhoncus donec ridiculus in vel.</>
    }
];

const technology = [
    {
        name: 'Seth Weiser',
        position: 'Senior Blockchain Developer',
        img: '/img/team/SethWeiser.png',
        description: 'Seth’s interest in markets and tech developed while earning his Finance degree at The George Washington University. Seth was responsible for developing one of the first online trading games in 1996 for AOL. Immediately after graduation, Seth worked in index arbitrage trading on S&P 500 Futures on the floor of the American Stock Exchange in NYC...'
    },
    {
        name: 'Dana Howell',
        position: 'Middle Front-End Developer',
        img: '/img/team/DanaHowell.png',
        description: <>Interdum vel consectetur nec tempor mauris eget lobortis bibendum commodo. Praesent quam risus sed posuere donec et ac diam.<br/><br/>Ullamcorper sollicitudin et nunc varius sed purus scelerisque nunc. Vitae leo at tempus eu scelerisque faucibus euismod. Vitae est nulla scelerisque gravida. Rhoncus donec ridiculus in vel.</>
    }
];

const Members: FC = () => {
  const isMobile = useCheckMobileScreen({ breakpoint: 1024 });

  return (
      <section className='md:mt-28 mt-20 md:mb-44 mb-20' id='executives'>
          <Container>
              {!isMobile ? (<>
                  <h2 className='text-3xl font-semibold'>Executives</h2>
                  <div className='grid grid-cols-10 gap-8 mt-12'>
                      <div className='col-span-2'></div>
                      <div className='col-span-8'>
                          {executives.map((member, idx) => (
                              <div
                                  key={idx}
                                  className='grid grid-cols-10 mb-24'
                              >
                                  <div className='col-span-3'>
                                      <Image
                                          src={member.img}
                                          alt={member.name.toString()}
                                          width={278}
                                          height={308}
                                      />
                                      <span className='text-4xl font-bold mt-4 block'>{member.name}</span>
                                  </div>
                                  <div className='col-span-7 ml-12'>
                                      <p className='text-2xl leading-normal'>{member.description}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  <h2 className='text-3xl font-semibold mt-12'>Technology</h2>
                  <div className='grid grid-cols-10 gap-8 mt-12'>
                      <div className='col-span-2'></div>
                      <div className='col-span-8'>
                          {technology.map((member, idx) => (
                              <div
                                  key={idx}
                                  className='grid grid-cols-10 mb-24'
                              >
                                  <div className='col-span-3'>
                                      <Image
                                          src={member.img}
                                          alt={member.name.toString()}
                                          width={278}
                                          height={308}
                                      />
                                      <span className='text-4xl font-bold mt-4 block'>{member.name}</span>
                                  </div>
                                  <div className='col-span-7 ml-12'>
                                      <p className='text-2xl leading-normal'>{member.description}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </>) : (
                  <Slider members={{executives, technology}} />
              )}
          </Container>
      </section>
  );
};

export default Members;