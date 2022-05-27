import { ChakraProvider } from '@chakra-ui/react';
// import type { AppProps } from 'next/app'

// import { Layout } from '@/components/_common/layout/Layout';

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     // <ChakraProvider>
//     //   <Layout>
//     //     <Component {...pageProps} />
//     //   </Layout>
//     // </ChakraProvider>
//     <h1>Hello world</h1>
//   );
// };

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { Layout } from '../components/_common/layout/Layout';

type NextPageWithLayout = NextPage & {
  Layout?: React.ComponentType
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    );
}



