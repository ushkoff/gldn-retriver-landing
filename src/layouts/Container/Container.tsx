import cls from 'classnames';
import React, { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: FC<Props> = ({ children, className }) => {
  return <div className={cls(styles.container, className)}>{children}</div>;
};

export default Container;
