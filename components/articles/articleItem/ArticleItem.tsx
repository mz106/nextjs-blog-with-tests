import React from 'react';
import { Fragment } from 'react';

import classes from './articleitem.module.css';

import type { Article } from '../../../lib/features/articles/types';

type Props = {}


const ArticleItem = ({ article } : {article: Article}) => {
  return (
    <Fragment>
        <div className={classes.item_wrapper}>
            <h4 className={classes.article_title}>{article.title}</h4>
            <img src={article.image} className={classes.img_article}/>
            <p className={classes.article_date}>{article.date}</p>
            <p className={classes.article_para}>{article.description}</p>
        </div>
        
    </Fragment>
  );
};

export default ArticleItem