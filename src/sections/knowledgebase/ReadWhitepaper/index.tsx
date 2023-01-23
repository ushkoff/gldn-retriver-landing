import { FC } from 'react';
import cls from 'classnames';
import styles from './style.module.scss';

import { Container } from '../../../layouts';

const ReadWhitepaper: FC = () => {
    return (
        <section className='' id='readWhitepaper'>
            <Container>
                <div className={cls(styles.wrapper, 'px-8 md:py-12 py-6 md:text-center text-left md:mt-56 mt-28 md:mb-44 mb-28')}>
                    <h2 className='font-bold'>READ OUR WHITEPAPER & FAQs</h2>
                </div>
            </Container>
        </section>
    );
};

export default ReadWhitepaper;