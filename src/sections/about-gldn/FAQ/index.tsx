import React, { FC } from 'react';
import cls from 'classnames';
import styles from './style.module.scss';

import Image from 'next/image';
import { Container } from '../../../layouts';
import GoldButton from '../../../components/ui/GoldButton';

const items = [
    {
        title: <h6>Is <strong>GLDN</strong> a security?</h6>,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis, consectetur cum cupiditate dolorum eius enim eos id inventore laboriosam minus nam natus non optio quas rem saepe? Amet blanditiis consectetur dignissimos dolorum exercitationem modi molestias, officia qui tempora vero?</p>
    },
    {
        title: <h6>What are the benefits of holding <strong>GLDN</strong> long term?</h6>,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi delectus eos explicabo fuga impedit inventore ipsum neque tenetur ut!</p>
    },
    {
        title: <h6>How much should I invest?</h6>,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deserunt facere fuga nulla officiis placeat, rem! Assumenda doloremque dolorum magni perferendis, possimus reprehenderit repudiandae. Accusantium aliquam, architecto consectetur, delectus dignissimos dolores enim, esse fugit hic nihil odit quae quia recusandae rerum totam ut vitae. Accusamus ad architecto commodi deleniti, dolor dolore esse expedita fuga, ipsum itaque labore modi nulla odio officia porro provident quae quia quod repellat, similique sit tenetur vero voluptas. Aut cupiditate dolores, dolorum eius ex exercitationem facere fuga inventore ipsum molestiae nemo neque nesciunt nihil nulla officia quas quis quod quos reiciendis rerum sint sunt tempora tenetur.</p>
    }
];

const FAQ: FC = () => {
    const handleOpenItem = (event: any) => {
        const itemHeader = event.currentTarget;
        const item = itemHeader.parentNode;

        itemHeader.querySelectorAll('img')[0].classList.toggle('hidden');
        itemHeader.querySelectorAll('img')[1].classList.toggle('hidden');
        item.querySelectorAll('div')[1].classList.toggle('hidden');
    }

  return (
    <section className='md:mt-36 mt-28 md:mb-52 mb-28' id='FAQ'>
        <Container>
            <h2 className='uppercase lg:text-4xl text-3xl leading-relaxed font-bold'>Frequently Asked Questions</h2>

            <div className='mt-10'>
                {items.map((item, i) => (
                    <div
                        key={i}
                        className={cls(styles.FAQItem, 'md:pl-8 pl-4 md:pr-5 pr-3 py-2 mt-5')}
                    >
                        <div
                            onClick={handleOpenItem}
                            className={cls(styles.FAQItem__header, 'flex items-center justify-between cursor-pointer leading-tight')}
                        >
                            {item.title}
                            <Image
                                src='/img/icons/arrow-down.png'
                                alt='open'
                                width={29}
                                height={19}
                                className='ml-2'
                            />
                            <Image
                                src='/img/icons/cross.png'
                                alt='close'
                                width={17}
                                height={17}
                                className='ml-3 mr-1 hidden'
                            />
                        </div>
                        <div className='leading-relaxed pb-4 mt-4 hidden'>
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>

            <div className='md:mt-12 mt-16 flex md:justify-start justify-center'>
                <GoldButton
                    type='large'
                    title={['More', 'FAQs']}
                    action={() => console.log('More FAQs...')}
                />
            </div>
        </Container>
    </section>
  );
};

export default FAQ;