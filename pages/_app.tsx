import '@/styles/globals.scss';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		if (!window.Snipcart) {
			const script = document.createElement('script');
			script.src =
				'https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js';
			script.async = true;
			document.body.appendChild(script);
		}
	}, []);
	return (
		<>
			<Component {...pageProps} />
			<div
				hidden
				id="snipcart"
				data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API}
				data-config-modal-style="side"
			></div>
		</>
	);
}
