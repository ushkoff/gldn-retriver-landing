import { FC } from 'react';

import { Container } from '../../../layouts';
import { Metrics, Swap, YourBalance, Chart } from './cards';

const Dashboard: FC = () => {
  return (
      <section id='dashboard' className='pb-10'>
          <Container wide={true}>
              <div className='flex justify-end'>
                  <span className='block text-sm text-gray-500'>Last updated - 4s ago</span>
              </div>

              <div className='flex justify-between grid-cols-9 gap-10 mt-4'>
                  <div className='col-span-6'>
                      <div className='grid grid-cols-4 gap-12'>
                          <Swap/>
                          <YourBalance/>
                      </div>
                      <Chart/>
                  </div>
                  <div className='col-span-3'>
                      <Metrics/>
                  </div>
              </div>
          </Container>
      </section>
  );
};

export default Dashboard;