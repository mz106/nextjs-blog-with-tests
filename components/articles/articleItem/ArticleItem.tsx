import React from 'react';
import { Fragment } from 'react';

import classes from './articleitem.module.css';

type Props = {}


const ArticleItem = (props: Props) => {
  return (
    <Fragment>
        <div className={classes.item_wrapper}>
            <h4 className={classes.article_title}>{props.article.title}</h4>
            <img src={props.article.image} className={classes.img_article}/>
            <p className={classes.article_date}>{props.article.date}</p>
            <p className={classes.article_para}>{props.article.description}</p>
        </div>
        
    </Fragment>
  );
};

export default ArticleItem