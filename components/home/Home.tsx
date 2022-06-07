import * as React from 'react';

import { SplashImage } from '../ui/splashImage/SplashImage';

import classes from './home.module.css';

export function Home(): React.ReactElement {
  return (
    <div className={classes.home_wrapper}>
        <SplashImage />
    </div>
  );
};
