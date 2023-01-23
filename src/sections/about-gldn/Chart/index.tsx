import React, { FC } from 'react';
import Image from 'next/image';

import { Container } from '../../../layouts';
import { useCheckMobileScreen } from '../../../hooks';

const Chart: FC = () => {
    const isHeaderMobile = useCheckMobileScreen({ breakpoint: 971 });

    return (
        <section className='mb-8' id='chart'>
            <Container>
                {isHeaderMobile ? (
                    <div className='text-center md:text-left'>
                        <span className='md:text-3xl text-2xl'>$1.0767</span>
                        <span className='ml-3 md:text-2xl text-xl'>
                            <span className='mr-1 text-green-600'>+0.1022</span>
                            (<span className='text-green-600'>+8.67%</span>)
                        </span>
                    </div>
                ) : (
                    <h2 className='uppercase text-4xl font-bold lg:mt-28 mt-16'><strong>GLDN</strong> Chart</h2>
                )}

                <div className='mt-6'>
                    <Image
                        src='/img/chart.png'
                        alt='chart'
                        width={1000}
                        height={500}
                        className='w-full'
                    />
                </div>
            </Container>
        </section>
    );
};;

export default Chart;