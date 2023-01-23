import localFont from '@next/font/local';
import cls from 'classnames';
import { FunctionComponent, PropsWithChildren } from 'react';

const TitilliumWeb = localFont({
    src: [
        {
            path: '../fonts/TitilliumWeb-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/TitilliumWeb-SemiBold.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/TitilliumWeb-Bold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../fonts/TitilliumWeb-Light.ttf',
            weight: '300',
            style: 'normal',
        },
    ],
});

const FontProvider: FunctionComponent<PropsWithChildren<any>> = ({ children }) => {
    return (
        <div id="root" className={cls(TitilliumWeb.className)}>
            {children}
        </div>
    );
};

export default FontProvider;
