import React from 'react';
import { Fragment } from 'react';

import ArticleItem from '../articleItem/ArticleItem';
import classes from './articlelist.module.css';

import { Article } from '../../../lib/features/articles/types';

type Props = {}

const ArticleList = ({ articles }: { articles : Array<Article>;}): React.ReactElement => {
  console.log(articles)
  return (

    <div className={classes.wrapper}>
      {articles.map((article: Article, index) => (
            <ArticleItem key={article.id} article={article}/>
        ))}
    </div>
  );
};

export default ArticleList
