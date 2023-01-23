import React, { FC } from 'react';
import config from '../../config';
import Image from 'next/image';

const SocialsWidget: FC = () => {
    return (
        <div className='absolute top-1/3 lg:right-4 right-2'>
            <ul className='flex flex-col justify-center'>
                {Object.keys(config.socials).map((social, idx) => (
                    <li className='mb-4' key={idx}><a href={config.socials[social]} target='_blank'>
                        <Image
                            src={`/img/socials/${social}.svg`}
                            alt={social}
                            width={21}
                            height={21}
                        />
                    </a></li>
                ))}
            </ul>    
        </div>
    );
};

export default SocialsWidget;

