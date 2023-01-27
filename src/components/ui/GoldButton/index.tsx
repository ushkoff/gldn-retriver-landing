import React, { FC } from 'react';
import styles from './style.module.scss';
import cls from 'classnames';

const buttonType = {
    DEFAULT: 'default',
    LARGE: 'large'
};
const buttonClasses = {
    'default': styles.goldButton,
    'large': styles.goldButtonLarge
}

type Props = {
    type?: string;
    title: Array<string>;
    action: () => void;
    className?: string;
    textBase?: boolean;
}

const GoldButton: FC<Props> = ({ type = buttonType.DEFAULT, title, action, className, textBase }) => {
    const oneWord = title.length === 1;
    const mainClass = buttonClasses[type];

    return (
        <button
            onClick={action}
            className={cls(mainClass, className)}
        >
            {!oneWord ? (
                <div>
                    <span className={type === buttonType.DEFAULT ? 'mr-1.5' : 'mr-3'}>{title[0]}</span>
                    <span>{title[1]}</span>
                </div>
            ) : (
                <div>
                    <span className={textBase ? cls(styles.textBase, 'w-20 truncate') : ''}>{title[0]}</span>
                </div>
            )}
            <div className={styles.greyStripe}></div>
        </button>
    )
}

export default GoldButton;