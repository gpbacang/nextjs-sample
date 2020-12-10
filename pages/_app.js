import AppFooter from '../components/generic/appFooter'
import '../styles/globals.css'
import DefaultLayout from '../layouts/default'
import Head from 'next/head'

export default ({ Component, pageProps }) => {
  const Layout = Component.Layout || DefaultLayout;
  const PageTitle = Component.PageTitle ? Component.PageTitle + ' - Trinity' : 'Trinity'
  return (
    <Layout>
      <Head>
        <title>{PageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}