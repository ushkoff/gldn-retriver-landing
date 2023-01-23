import { FC } from 'react';

import { HomeLayout } from '../layouts';
import { Header, Footer } from '../components';
import { Content, Introduction, RelatedArticles } from '../sections/article';

const Article: FC = () => {
    return (
        <>
            <Header/>
            <HomeLayout>
                <Introduction/>
                <Content/>
                <RelatedArticles/>
            </HomeLayout>
            <Footer/>
        </>
    );
}

export default Article;
