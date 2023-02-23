import Link from 'next/link';
import {FaShoppingCart} from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Nav() {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        if (window.Snipcart) {
            setTotal(Snipcart.store.getState().cart.total);
        }
    })
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="#" className="snipcart-checkout snipcart-summary">
                <FaShoppingCart />
                <span className="snipcart-total-price">
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(total)}
                </span>
            </Link>
        </nav>
    )
}