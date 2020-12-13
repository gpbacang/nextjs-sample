import AppFooter from '../components/generic/AppFooter';
import '../styles/globals.css';
import DefaultLayout from '../layouts/default';
import Head from 'next/head';
import Navigation from '../components/generic/Navigation';

const AppPage = ({ Component, pageProps }) => {
  const Layout = Component.Layout || DefaultLayout;
  const PageTitle = Component.PageTitle
    ? Component.PageTitle + ' - Trinity'
    : 'Trinity';
  return (
    <Layout>
      <Head>
        <title>{PageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div suppressHydrationWarning>
        <Navigation></Navigation>
        {typeof window === 'undefined' ? null : <Component {...pageProps} />}
      </div>
    </Layout>
  );
};

export default AppPage;
