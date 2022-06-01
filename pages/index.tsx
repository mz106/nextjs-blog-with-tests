import { Flex } from '@chakra-ui/react';

import SplashImage from '../components/ui/splashImage/SplashImage';
import LandingAuth from '@/components/register/LandingAuth';

export default function Page() {
  return (
    <Flex h="65vh" alignItems="center" justify="center">
      <SplashImage />
    </Flex>
  );
};


