
import Image from 'next/image';
import { Fragment } from 'react';

import classes from './splashimage.module.css';

export function SplashImage() : React.ReactElement {
  
  return (
    // <div className={classes.splash_wrapper}>
    //   {/* <Image
    //     alt="Concert goer with hands in the shape of a heart"
    //     src="/splash-one.jpg"
    //     layout="responsive"
    //     height={50}
    //     width={50}
    //     // sizes="320 640 750"
    //     objectFit="cover"
    //     // quality={100}
    //   /> */}
    //   <img src='/images/splash/splash-one.jpg' className={classes.splash_img}/>
    // </div>
    <div className={classes.splash_wrapper}>
      <img src='/images/splash/splash-one.jpg' className={classes.splash_img}/>
    </div>
  );
};

