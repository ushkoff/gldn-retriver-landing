import { FC } from 'react';
import cls from 'classnames';
import styles from '../../style.module.scss';

import Image from 'next/image';
import TradingViewWidget from '../../../../../components/TradingViewWidget';

const Chart: FC = () => {
  return (
      <div className={cls(styles.card, 'col-span-2 px-6 py-3 mt-16')}>
        <div className='grid grid-cols-10 gap-10'>
            <div className='col-span-4'>
                <div className={cls(styles.card__content, 'relative mt-1 px-6 py-3')}>
                    <span className={styles.card__title}>GLDN Price</span>
                    <span className={styles.card__balance}>$0.803</span>
                </div>
                <div className={cls(styles.card__content, 'relative mt-3 px-6 py-3')}>
                    <span className={styles.card__title}>PAXG Price</span>
                    <span className={styles.card__balance}>$1.879.43</span>
                </div>
            </div>

            <div className='col-span-6 grid grid-cols-10 gap-8 mt-1'>
                <div className='col-span-8'>
                    <TradingViewWidget height={245} />
                </div>
                <div className='col-span-2'>
                    <ul className='mt-4'>
                        <li className='flex items-center text-lg'>
                            <Image
                                src='/img/icons/gldn-marker.png'
                                alt='.'
                                width={18}
                                height={18}
                                className='mr-3'
                            />
                            <span>GLDN</span>
                        </li>
                        <li className='flex items-center text-lg mt-2'>
                            <Image
                                src='/img/icons/paxg-marker.png'
                                alt='.'
                                width={18}
                                height={18}
                                className='mr-3'
                            />
                            <span>PAXG</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
  );
};

export default Chart;