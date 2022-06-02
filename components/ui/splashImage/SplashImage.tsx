
import Image from 'next/image';

import classes from './splashimage.module.css';

export interface IAppProps {
}

export default function SplashImage (props: IAppProps) {
  
  return (
    <div className={classes.splash_wrapper}>
      {/* <Image
        alt="Concert goer with hands in the shape of a heart"
        src="/splash-one.jpg"
        layout="responsive"
        height={50}
        width={50}
        // sizes="320 640 750"
        objectFit="cover"
        // quality={100}
      /> */}
      <img src='/images/splash/splash-one.jpg' className={classes.splash_img}/>
    </div>
  );
}

{/* <Image
        alt="Concert goer with hands in the shape of a heart"
        src="/images/splash/splash-one.jpg"
        layout="responsive"
        height={90}
        width={100}
        // sizes="320 640 750"
        objectFit="cover"
        quality={100}
      /> */}
