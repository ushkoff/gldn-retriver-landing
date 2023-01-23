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

                <p className='text-xl md:mt-16 mt-12'>Rather than relying on revenue derived from aggressive token emissions to provide investors with yield like many unsuccessful DeFi projects of 2021, Gold Retriever aims to provide investors with volume-based yield in the form of a sustainable stablecoin. The success of Gold Retriever depends on its ability to accrue new users and increase transaction volume over time to reward token holders.</p>

                <p className='text-xl mt-8'>Holders of $GLDN will be a part of a much larger ecosystem where investors are rewarded with the hottest commodities, including precious metals, energy, grains, and more. $GLDN holders will get first access to future assets in Gold Retriever’s ever-growing ecosystem.<br/><br/>As a nod to our namesake, we have allocated a portion of $GLDN tokens and transaction fees to donate to Golden Retriever and other dog rescues/non-profit charities</p>
          </Container>
      </section>
  );
};

export default Content;