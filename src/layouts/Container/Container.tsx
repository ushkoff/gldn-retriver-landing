import cls from 'classnames';
import React, { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  wide?: boolean
};

const Container: FC<Props> = ({ children, className, wide }) => {
  return <div className={cls(wide ? styles.containerWide : styles.container, className)}>{children}</div>;
};

export default Container;
