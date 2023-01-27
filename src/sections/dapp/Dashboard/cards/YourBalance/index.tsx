import { FC } from 'react';
import cls from 'classnames';
import styles from '../../style.module.scss';

const YourBalance: FC = () => {
    return (
        <div className={cls(styles.card, 'col-span-2 px-6 pt-8 pb-4')}>
            <div className='px-8'>
                <span className={styles.card__title}>Your balance</span>
                <span className={styles.card__balance}>2,500.00 <span>GLDN</span></span>
                <span className={styles.card__nearlyBalance}>~ $2,000.00</span>
            </div>

            <div className='grid grid-cols-4 gap-6 mt-10'>
                <div className={cls(styles.card__content, 'col-span-2 pt-8 px-6 pb-6')}>
                    <span className={styles.card__title}>Earned PAXG</span>
                    <span className={styles.card__balance}>0.019</span>
                    <span className={styles.card__nearlyBalance}>~ $3.498</span>
                    <div className='flex justify-center mt-10 mb-2'>
                        <button className={styles.card__button}>Claim</button>
                    </div>
                </div>

                <div className={cls(styles.card__content, 'col-span-2 pt-8 px-6 pb-6')}>
                    <span className={styles.card__title}>Realised PAXG</span>
                    <span className={styles.card__balance}>0.000</span>
                    <span className={styles.card__nearlyBalance}>~ $0.00</span>
                </div>
            </div>
        </div>
    );
}

export default YourBalance;