import Image from 'next/image'
import {useState, useEffect} from 'react';

import CartButton from './CartButton';
import CartQuantity from './CartQuantity';
import CartModal from './CartModal';

import styles from '../../styles/ProductListing.module.scss';

type product = {
    title: string,
    id: string,
    image: string,
    description: string,
    price: string,
    stock: number
}
export default function ProductListing(props: {product: product}) {
    const [quantity, setQuantity] = useState(1);
    const [show, setShow] = useState(false);
    const product = props.product;

    const renderStock = () => {
        if (props.product.stock < 5) {
            return <p>Hurry! Only {props.product.stock} in stock!</p>
        }
    }
    
    useEffect(() => {
        if (document) {
            const numberInput = (document.getElementById(`number-input-${props.product.id}`) as HTMLInputElement | null);
            if (numberInput) {
                if (quantity >= 1) {
                    if (quantity <= props.product.stock) {
                        numberInput.value = quantity.toString();
                    } else {
                        setQuantity(props.product.stock)
                    }
                } else {
                    setQuantity(1);
                    //no non-whole values less than 1
                }
            }
        }
    }, [quantity])

    return (
    <div className={styles.listCard}>
        <h4>{props.product.title}</h4>
        <Image src={props.product.image} alt={`Preview of ${props.product.title}`} height={200} width={150}/>
        <p>{props.product.description}</p>
        <p>${props.product.price}</p>
        {renderStock()}
        <CartQuantity quantity={quantity} setQuantity={setQuantity} productId={props.product.id} />
        <CartModal show={show}/>
        {/*<CartButton productId={props.product.id} quantity={quantity} stock={props.product.stock} show={show} setShow={setShow}/>*/}
        <button className="snipcart-add-item"
        data-item-id={product.id}
        data-item-image={product.image}
        data-item-name={product.title}
        data-item-price={product.price} >snipcart</button>
    </div>
    )
}