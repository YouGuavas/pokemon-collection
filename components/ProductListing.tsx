import Image from 'next/image'
import {useState, useEffect} from 'react';

import CartButton from './CartButton';
import CartQuantity from './CartQuantity';

import styles from '../styles/ProductListing.module.scss';

type product = {
    title: string,
    id: string,
    image: string,
    description: string,
    price: string
}
export default function ProductListing(props: {product: product}) {
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        if (document) {
            const numberInput = (document.getElementById('number-input') as HTMLInputElement | null);
            if (numberInput) {
                numberInput.value = quantity.toString();
            }
        }
    }, [quantity])
    return (
    <div className={styles.listCard}>
        <h4>{props.product.title}</h4>
        <Image src={props.product.image} alt={`Preview of ${props.product.title}`} height={200} width={150}/>
        <p>{props.product.description}</p>
        <p>${props.product.price}</p>
        <CartQuantity quantity={quantity} setQuantity={setQuantity}/>
        <CartButton productId={props.product.id} quantity={quantity} />
    </div>
    )
}