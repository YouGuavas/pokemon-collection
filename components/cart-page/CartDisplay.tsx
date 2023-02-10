import CartCard from './CartCard';
import {useState, useEffect} from 'react';

export default function CartDisplay(props: {cartItems: {}, products: Array<object>, total: number, setTotal: Function}) {
    const renderCartItems = () => {
        return props.products.map((item: any, index: number) => {
            if (typeof props.cartItems === 'object') {
            if (Object.keys(props.cartItems).indexOf(item.id) !== -1) {
                return (<CartCard key={index} product={item} quantity={props.cartItems[item.id]}/>)
            }
        }
        })
    }
    
    return (
        <ul>
            {renderCartItems()}
        </ul>
    )
}