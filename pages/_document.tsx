import { Html, Head, Main, NextScript } from 'next/document'
import Nav from '../components/Nav';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>
      <body>
        <Nav />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
