import React from 'react'


import { getAllArticles } from '../../helpers/articleHelpers';
import ArticleList from '@/components/articles/articleList/ArticleList';
import classes from './articlescss/articles.module.css';

type Props = {}

const Articles = (props: Props) => {
  
  return (
    <div className={classes.articles_wrapper}>
      <ArticleList articles={props.articles}/>
    </div>  
  );
};

export default Articles;

export async function getStaticProps() {
  const allArticles = await getAllArticles();
  
  return {
    props: {
      articles: allArticles,
    },
  };
};