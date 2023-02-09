export default function CartButton(props: {productId: string, quantity: number, stock: number, show: boolean, setShow: Function}) {
    
    const handleShow = (show: boolean) => {
        if (show && !props.show) {
            //only show modal if user does not already have the entire stock in their cart
            props.setShow(true);
            setTimeout(() => {props.setShow(false)}, 1500);
        }
    }


    const addToCart = (productId: string, quantity: number = 1, stock: number = 1) => {
        const cartStorage: any = localStorage.getItem('cart-storage');
        let tempCartStorage: {[productId: string]: number} = {};
        let show: boolean = false;
        if (cartStorage !== null) {
            tempCartStorage = JSON.parse(cartStorage);
            
            if (tempCartStorage[productId]) {
                if (tempCartStorage[productId] < stock) {show = true;}

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
                show = true;
            }

        } 
        
        else {
            
            if (quantity < stock) {
                tempCartStorage[productId] = quantity;
            } else {
                tempCartStorage[productId] = stock;
            }
            show = true;
        
        }
        try {
            localStorage.setItem('cart-storage', JSON.stringify(tempCartStorage));
            handleShow(show);
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