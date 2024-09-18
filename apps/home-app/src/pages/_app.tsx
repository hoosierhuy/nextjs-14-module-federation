import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { UnauthenticatedTemplate } from '../components/UnauthenticatedTemplate';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Analytics | Dashboard</title>
      </Head>
      <UnauthenticatedTemplate focused={true}>
        <Component {...pageProps} />
      </UnauthenticatedTemplate>
    </>
  );
}

export default CustomApp;
