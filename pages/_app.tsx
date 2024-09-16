import '@/styles/globals.scss';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
