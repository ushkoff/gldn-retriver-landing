import { FC } from 'react';
import cls from 'classnames';
import styles from '../../style.module.scss';

import Image from 'next/image';

const Swap: FC = () => {
  return (
      <div className={cls(styles.card, 'col-span-2 px-6 pt-8 pb-4')}>
          <div className='px-8'>
              <span className={styles.card__title}>Swap</span>
              <span className={styles.card__balance}>1000.00 <span>GLDN</span></span>
              <span className={styles.card__nearlyBalance}>~ $1,500.00</span>
          </div>

          <div className={cls(styles.card__content, 'relative mt-1 pt-4 px-6 pb-6')}>
              <Image
                  src='/img/icons/reload.png'
                  alt='reload'
                  width={55}
                  height={55}
                  className={styles.reloadBtn}
              />

              <span className={styles.card__title}>For</span>
              <span className={styles.card__balance}>1000.00 <span>ETH</span></span>
              <span className={styles.card__nearlyBalance}>~ $1,500.00</span>
              <hr className='my-4'/>
              <span className={styles.card__nearlyBalance}>1 ETH = 1000 GLDN ($1,500.00) </span>

              <div className='flex justify-center mt-10 mb-2'>
                  <button className={styles.card__button}>Confirm</button>
              </div>
          </div>
      </div>
  );
};

export default Swap;