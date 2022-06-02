import React from 'react';
import { Fragment } from 'react';

import ArticleItem from '../articleItem/ArticleItem';
import classes from './articlelist.module.css';

type Props = {}

const ArticleList = (props: Props) => {
  return (

    <div className={classes.wrapper}>
      {props.articles.map((article, index) => (
            <ArticleItem key={article.id} article={article}/>
        ))}
    </div>
  );
};

export default ArticleList