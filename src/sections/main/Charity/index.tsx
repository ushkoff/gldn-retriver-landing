import { FC } from 'react';
import Image from 'next/image';

import { Container } from '../../../layouts';

const Charity: FC = () => {
  return (
      <section className='lg:mt-40 md:mt-28 mt-16 mb-12' id='charity'>
        <Container>
            <div className='grid grid-cols-12'>
                <div className='col-span-9 lg:text-4xl md:text-3xl text-2xl'>
                    <p>100% of growth will be allocated to project expansion which includes, but is not limited to, marketing, market making, and charitable donations to dog non-profit organizations.</p>
                </div>
            </div>
            <div className='grid grid-cols-8 relative bottom-8'>
                <div className='col-span-5'></div>
                <div className='col-span-3'>
                    <Image
                        src='/img/dogs.png'
                        alt='dogs'
                        width={460}
                        height={460}
                    />
                </div>
            </div>
        </Container>
      </section>
  );
};

export default Charity;