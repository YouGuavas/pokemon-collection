import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import Nav from '../components/Nav';

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
			</Head>

			<main className={styles.main}>
				<Nav />
				<ProductGallery products={products} />
			</main>
			<footer className={styles.footer}>&copy; Patrick Yambrick 2023</footer>
		</>
	);
}
