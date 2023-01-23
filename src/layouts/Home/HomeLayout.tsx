import React, { FC } from 'react';
import GridBackground from '../../components/ui/GridBackground';

type Props = {
  children: React.ReactNode;
};

const HomeLayout: FC<Props> = ({ children }) => {
  return <>
    <GridBackground/>
    <main>{children}</main>
  </>;
};

export default HomeLayout;
