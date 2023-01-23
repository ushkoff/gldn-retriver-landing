import { FC } from 'react';

import Image from 'next/image';
import { Container } from '../../../layouts';

const Content: FC = () => {
  return (
      <section className='mb-12' id='content'>
          <Container>
                <Image
                    src='/img/content_img.png'
                    alt='content-img'
                    width={1149}
                    height={513}
                />
          </Container>
      </section>
  );
};

export default Content;