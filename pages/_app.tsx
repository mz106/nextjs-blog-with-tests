import { ChakraProvider } from '@chakra-ui/react';
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import "../styles/global.css";
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
}



