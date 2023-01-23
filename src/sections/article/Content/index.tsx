import { FC } from 'react';

import Image from 'next/image';
import { Container } from '../../../layouts';

const Content: FC = () => {
    return (
        <section className='mt-16 mb-16' id='content'>
            <Container>
                <h3 className='md:text-4xl text-3xl font-bold'>Interdum vel consectetur nec</h3>
                <p className='text-xl mt-5'>Interdum vel consectetur nec tempor mauris eget lobortis bibendum commodo. Praesent quam risus sed posuere donec et ac diam. Ullamcorper sollicitudin et nunc varius sed purus scelerisque nunc. Vitae leo at tempus eu scelerisque faucibus euismod. Vitae est nulla scelerisque gravida. Rhoncus donec ridiculus in vel.</p>

                <h4 className='text-3xl font-bold mt-10'>Interdum vel consectetur nec</h4>
                <p className='text-xl mt-5'>Condimentum urna at mi faucibus nec donec massa faucibus fringilla. Convallis dignissim eu adipiscing semper lobortis scelerisque nisl tincidunt. Consectetur phasellus in dui lorem velit augue netus nullam gravida. Leo enim aliquam at magnis sit id scelerisque sit. Tellus consectetur blandit lorem id quis et. Cursus sit vivamus nunc morbi aliquam eu lorem. Sagittis molestie id commodo facilisi nulla platea. Lectus sagittis magna justo ut mi scelerisque id turpis. </p>

                <div className='mt-10'>
                    <Image
                        src='/img/article_wide_img.png'
                        alt='article-wide-img'
                        width={994}
                        height={301}
                    />
                </div>

                <h3 className='md:text-4xl text-3xl font-bold mt-12'>Interdum vel consectetur nec</h3>
                <p className='text-xl mt-5'>Interdum vel consectetur nec tempor mauris eget lobortis bibendum commodo. Praesent quam risus sed posuere donec et ac diam. Ullamcorper sollicitudin et nunc varius sed purus scelerisque nunc. Vitae leo at tempus eu scelerisque faucibus euismod. Vitae est nulla scelerisque gravida. Rhoncus donec ridiculus in vel.</p>

            </Container>
        </section>
    );
}

export default Content;