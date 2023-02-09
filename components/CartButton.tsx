export default function CartButton(props: {productId: string, quantity: number, stock: number, show: boolean, setShow: Function}) {
    
    const handleShow = () => {
        if (!props.show) {
            props.setShow(true);
            setTimeout(() => {props.setShow(false)}, 1500);
        }
    }


    const addToCart = (productId: string, quantity: number = 1, stock: number = 1) => {
        const cartStorage: any = localStorage.getItem('cart-storage');
        let tempCartStorage: {[productId: string]: number} = {};
        if (cartStorage !== null) {
            tempCartStorage = JSON.parse(cartStorage);
            
            if (tempCartStorage[productId]) {
                if (tempCartStorage[productId] + quantity < stock) {
                    tempCartStorage[productId] += quantity;
                } else {
                    tempCartStorage[productId] = stock;
                }
            } 

            else {
                if (quantity < stock) {
                    tempCartStorage[productId] = quantity;
                } else {
                    tempCartStorage[productId] = stock;
                }
            }

        } 
        
        else {
            
            if (quantity < stock) {
                tempCartStorage[productId] = quantity;
            } else {
                tempCartStorage[productId] = stock;
            }
        
        }
        try {
            localStorage.setItem('cart-storage', JSON.stringify(tempCartStorage));
            handleShow();
        } catch(error) {
            console.log(error);
        }

    }


    return (
        <button onClick={() => addToCart(props.productId, props.quantity, props.stock)}>
            Add to cart
        </button>
    )
}