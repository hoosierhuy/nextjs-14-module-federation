import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { AuthenticatedTemplate } from '../components/AuthenticatedTemplate';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Analytics | Messages</title>
      </Head>
      <AuthenticatedTemplate activePath="/messages">
        <Component {...pageProps} />
      </AuthenticatedTemplate>
    </>
  );
}

export default CustomApp;