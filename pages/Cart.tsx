import products from '../products.json';

import CartItemsDisplay from '../components/cart-page/CartDisplay';
import {useEffect, useState} from 'react';

export default function Cart() {
    const [total, setTotal] = useState(0);
    const [cartItems, setCartItems] = useState({});
    const [finalCartItems, setFinalCartItems] = useState([])

    const whatAreCartItems = () => {
        const newArray: [{product: {}; quantity: number}] = [];
        products.map((item: any, index: number) => {
            if (typeof cartItems === 'object') {
            if (Object.keys(cartItems).indexOf(item.id) !== -1) {
                setTotal(total + Number(item.price) * cartItems[item.id]);
                newArray.push({product: item, quantity: cartItems[item.id]});
            }
        }
        })
        setFinalCartItems(newArray);
    }

    useEffect(() => {
        const cartStorage = localStorage.getItem('cart-storage');
        if (cartStorage !== null) {
            setCartItems(JSON.parse(cartStorage));
        } 
    }, [])
    useEffect(() => {
        whatAreCartItems()
        console.log(finalCartItems);
    }, [cartItems])

    return (
    <div>
        <CartItemsDisplay total={total} setTotal={setTotal} products={products} cartItems={cartItems} />
        <div>
            ${total}
        </div>
    </div>
    )
}