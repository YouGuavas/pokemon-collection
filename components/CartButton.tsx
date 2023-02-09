export default function CartButton(props: {productId: string, quantity: number, stock: number}) {
    const addToCart = (productId: string, quantity: number = 1, stock: number = 1) => {
        const cartStorage: any = localStorage.getItem('cart-storage');
        if (cartStorage !== null) {
            let tempCartStorage = JSON.parse(cartStorage);
            if (tempCartStorage[productId]) {
                console.log(quantity, stock);

                if (tempCartStorage[productId] + quantity < stock) {
                    tempCartStorage[productId] += quantity;
                } else {
                    tempCartStorage[productId] = stock;
                }
            } else {
                console.log(quantity, stock);

                if (quantity < stock) {
                    tempCartStorage[productId] = quantity;
                } else {
                    tempCartStorage[productId] = stock;
                }
            }
            console.log(tempCartStorage);
            localStorage.setItem('cart-storage', JSON.stringify(tempCartStorage));
        } else {

            let tempCartStorage: {[productId: string]: number} = {};
            console.log(quantity, stock);
            if (quantity < stock) {
                tempCartStorage[productId] = quantity;
            } else {
                tempCartStorage[productId] = stock;
            }
            localStorage.setItem('cart-storage', JSON.stringify(tempCartStorage));
        }
    }
    return (
        <button onClick={() => addToCart(props.productId, props.quantity, props.stock)}>
            Add to cart
        </button>
    )
}