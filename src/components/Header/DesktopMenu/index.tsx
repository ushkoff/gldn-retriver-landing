import React, { FC } from 'react';
import { useRouter } from 'next/router';

import GoldButton from '../../ui/GoldButton';
import Link from 'next/link';

type Props = {
    children: React.ReactNode;
    withPrice?: boolean;
}

const DesktopMenu: FC<Props> = ({ children, withPrice }) => {
    const router = useRouter();

    return (
        <div className='h-20 flex justify-between items-center'>
            {withPrice ? (
                <div className='flex items-center'>
                    <div className='uppercase mr-8'><Link href='/'>Gold Retriever</Link></div>
                    <div>
                        <span>$1.0767</span>
                        <span className='ml-3 text-xs'>
                            <span className='mr-1 text-green-600'>+0.1022</span>
                            (<span className='text-green-600'>+8.67%</span>)
                        </span>
                    </div>
                </div>
            ) : (
                <div className="uppercase"><Link href='/'>Gold Retriever</Link></div>
            )}

            <div className='h-20 flex justify-between items-center'>

                {children}

                <GoldButton
                    title={['Launch', 'APP']}
                    action={() => router.push('/dapp')}
                    className='ml-20'
                />
            </div>
        </div>
    );
}

export default DesktopMenu;