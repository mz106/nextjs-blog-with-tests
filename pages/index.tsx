import Head from 'next/head';

import { Home } from '../components/home/Home';
import { SplashImage } from '@/components/ui/splashImage/SplashImage';
import ArticleList from '@/components/articles/articleList/ArticleList';

import classes from './index.module.css';

// export default function HomePage() {
//   return (
//     <div className={classes.wrapper}>
//       <ArticleList />
//     </div>
//   );
// };



type Props = {}

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>DevBlog</title>
        <meta
          name='description'
          content='Find a lot of great events that allow you to evolve...'
        />
      </Head>
      
      <SplashImage />
    </div>
  )
}

export default HomePage


