import Link from 'next/link';
import {FaShoppingCart} from 'react-icons/fa';

export default function Nav() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/Cart"><FaShoppingCart /></Link>
        </nav>
    )
}