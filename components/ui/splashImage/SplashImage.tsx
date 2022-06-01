import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { Fragment } from 'react';

import LandingAuth from '@/components/register/LandingAuth';

export interface IAppProps {
}

export default function SplashImage (props: IAppProps) {
  
  return (
    // <Box
    //   pos="fixed"
    //   top={0}
    //   left={0}
    //   h="75vh"
    //   w="100vw"
    //   overflow="hidden"
    //   zIndex={-1}
    // //   backgroundColor="black"
    // >
    //     <Image 
    //       src="/images/splash/splash-one.jpg" 
    //       width={500}
    //       height={500}
    //       layout="responsive"
    //       objectFit='contain'
    //     />
    // </Box>
    <Box
      pos="fixed"
      top={0}
      left={0}
      h="100vh"
      w="100vw"
      overflow="hidden"
    //   zIndex={-1}
    >
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
      <Box
        pos="fixed"
        left={680}
        top={400}
        zIndex={100}
        color="white"
      >
          <LandingAuth />
      </Box>
    </Box>
  );
}
