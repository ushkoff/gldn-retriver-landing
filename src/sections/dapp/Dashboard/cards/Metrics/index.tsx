import { FC } from 'react';
import cls from 'classnames';
import styles from '../../style.module.scss';

import SocialsWidget from '../../../../../components/SocialsWidget';

const Metrics: FC = () => {
    return (
        <div className={cls(styles.card, 'px-7 pt-8 pb-4')}>
            <div className={cls(styles.card__content, 'col-span-2 py-4 px-6')}>
                <span className={styles.card__title}>Market cap (USD)</span>
                <span className={styles.card__balance}>$8,431,275.66</span>
            </div>
            <div className={cls(styles.card__content, 'col-span-2 py-4 px-6 mt-12')}>
                <span className={styles.card__title}>LIQUDITY (USD)</span>
                <span className={styles.card__balance}>$725,432.47</span>
            </div>
            <div className={cls(styles.card__content, 'col-span-2 py-4 px-6 mt-12')}>
                <span className={styles.card__title}>SUPPLY</span>
                <span className={styles.card__balance}>10,500,000</span>
            </div>
            <div className={cls(styles.card__content, 'col-span-2 py-4 px-6 mt-12')}>
                <span className={styles.card__title}>TOTAL DISTRIBUTED DIVIDENDS (USD)</span>
                <span className={styles.card__balance}>$1,049,647.60</span>
            </div>

            <div className='px-6 mt-16'>
                <SocialsWidget isStatic={true} isHorizontal={true} largeIcons={true} includeAll={true} />
            </div>
        </div>
    );
}

export default Metrics;