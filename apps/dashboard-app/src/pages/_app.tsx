import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AuthenticatedTemplate } from '../components/AuthenticatedTemplate';
config.autoAddCss = false;

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Analytics | Dashboard</title>
      </Head>
      <AuthenticatedTemplate activePath="/dashboard">
        <Component {...pageProps} />
      </AuthenticatedTemplate>
    </>
  );
}

export default CustomApp;
