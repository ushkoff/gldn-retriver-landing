import React from 'react';
import cls from 'classnames';
import styles from './style.module.scss';

import config from '../../../config';
import Image from 'next/image';

type Ref = HTMLButtonElement;
type Props = {};

const JoinUs = React.forwardRef<Ref, Props>((props, ref) => {
    return (
        <section ref={ref} className='mt-8 md:mb-40 mb-32' id='joinUs'>
            <h3 className={cls(styles.title, 'md:font-semibold font-normal')}>Join our <strong>community</strong></h3>
            <div className={cls(styles.socials, 'md:mt-10 mt-6')}>
                <ul className='flex justify-center items-center'>
                    <li className='md:mr-20 mr-10'><a href={config.socials.telegram} target='_blank'>
                        <Image
                            src='/img/socials/telegram.svg'
                            alt='telegram'
                            width={93}
                            height={93}
                        />
                    </a></li>
                    <li><a href={config.socials.twitter} target='_blank'>
                        <Image
                            src='/img/socials/twitter.svg'
                            alt='twitter'
                            width={93}
                            height={93}
                        />
                    </a></li>
                </ul>
            </div>
        </section>
    );
});

export default JoinUs;