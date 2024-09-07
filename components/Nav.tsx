import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import { create, grabElement, addToParent } from '../utils/_functions';

import styles from '../styles/Nav.module.scss';

declare global {
	interface Window {
		Snipcart: any;
	}
}
export default function Nav() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		if (window.Snipcart) {
			console.log(window);
			setCount(window.Snipcart.store.getState().cart.items.count);
		}
	}, []);

	useEffect(() => {
		if (count > 0) {
			renderCount();
		}
	}, []);

	const renderCount = () => {
		const link = grabElement('snipcart-link');
		const newSpan = create('span');
		newSpan.innerHTML = count;
		addToParent(link, newSpan);
	};
	return (
		<header id={styles.Nav} className={`${styles.Nav}`}>
			<div>
				<h3>Store</h3>
			</div>
			<ul className={`${styles.NavList}`}>
				<li>
					<Link href="#">Pokemon</Link>
				</li>
				<li>
					<Link
						id="snipcart-link"
						href="#"
						className={`${styles.snipcartLink} snipcart-checkout snipcart-summary`}
					>
						<FaShoppingCart />
					</Link>
				</li>
			</ul>
		</header>
	);
}
