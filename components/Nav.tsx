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
					<button
						id="snipcart-link"
						className={`${styles.snipcartLink} snipcart-checkout snipcart-summary`}
					>
						<FaShoppingCart />
						<span className="snipcart-items-count"></span>
					</button>
				</li>
			</ul>
		</header>
	);
}
