import React, { FC } from 'react';

type Props = {
    children: React.ReactNode;
};

const EmptyLayout: FC<Props> = ({ children }) => {
    return <main>{children}</main>;
};

export default EmptyLayout;
