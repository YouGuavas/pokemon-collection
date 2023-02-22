import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import ProductGallery from '../components/listings/ProductGallery';

import products from '../products.json';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Pokemon Shop</title>
        <meta name="description" content="Pokemon shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>
      <main className={styles.main}>
        <ProductGallery products={products} />
      </main>
      <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key="OGU2OWMwOGMtNjM2Mi00MWEyLTlhYmUtYjA1MTA4YzY5MzNkNjM4MTI3MDA4NDE3MzEzOTgy" />
    </>
  )
}
