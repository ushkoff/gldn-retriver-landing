import React, { FC } from 'react';
import cls from 'classnames';

import config from '../../config';
import Image from 'next/image';

type Props = {
  isStatic?: boolean;
  isHorizontal?: boolean;
  largeIcons?: boolean;
  includeAll?: boolean;
};

const SocialsWidget: FC<Props> = ({ isHorizontal, isStatic, largeIcons, includeAll }) => {
    return (
        <div className={cls(!isStatic ? 'absolute top-1/3 lg:right-4 right-2' : '')}>
            <ul className={cls(!isHorizontal ? 'flex flex-col justify-center' : 'flex justify-between items-center')}>
                {Object.keys(!includeAll ? config.socials : { ...config.socials, ...config.cryptoResources }).map((social, idx) => (
                    <li className='mb-4' key={idx}><a href={config.socials[social] ?? config.cryptoResources[social]} target='_blank'>
                        <Image
                            src={`/img/socials/${social}.svg`}
                            alt={social}
                            width={largeIcons ? 40 : 21}
                            height={largeIcons ? 40 : 21}
                        />
                    </a></li>
                ))}
            </ul>    
        </div>
    );
};

export default SocialsWidget;

