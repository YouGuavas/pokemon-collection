export default function CartButton(props: {productId: string, quantity: number}) {
    const addToCart = (productId: string, quantity: number = 1) => {
        const cartStorage: any = localStorage.getItem('cart-storage');
        if (cartStorage !== null) {
            let tempCartStorage = JSON.parse(cartStorage);
            if (tempCartStorage[productId]) {
                tempCartStorage[productId] += quantity;
            } else {
                tempCartStorage[productId] = quantity;
            }
            console.log(tempCartStorage);
            localStorage.setItem('cart-storage', JSON.stringify(tempCartStorage));
        } else {
            let tempCartStorage: {[productId: string]: number} = {[productId]: quantity};
            localStorage.setItem('cart-storage', JSON.stringify(tempCartStorage));
        }
    }
    return (
        <button onClick={() => addToCart(props.productId)}>
            Add to cart
        </button>
    )
}