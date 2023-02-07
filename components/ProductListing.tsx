import CartButton from './CartButton';

import Image from 'next/image'
import styles from '../styles/ProductListing.module.scss';

type product = {
    title: string,
    id: string,
    image: string,
    description: string,
    price: string
}
export default function ProductListing(props: {product: product}) {
    return (
    <div className={styles.listCard}>
        <h4>{props.product.title}</h4>
        <Image src={props.product.image} alt={`Preview of ${props.product.title}`} height={200} width={150}/>
        <p>{props.product.description}</p>
        <p>${props.product.price}</p>
        <CartButton productId={props.product.id} />
    </div>
    )
}