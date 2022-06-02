import * as React from 'react';

import SplashImage from '../ui/splashImage/SplashImage';

import classes from './home.module.css';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className={classes.home_wrapper}>
        <SplashImage />
    </div>
  );
};
