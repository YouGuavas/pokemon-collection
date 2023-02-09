export default function CartQuantity(props: {quantity: number, setQuantity: Function, productId: string}) {
    const add = () => {
        props.setQuantity(props.quantity+1)
    }
    const subtract = () => {
        if (props.quantity > 1) {
            props.setQuantity(props.quantity-1)
        }
    }
    
    const handleInput = (e: any) => {
        if (window) {
            if (e.target) {
                if (e.target.value) {
                    if (!Number.isNaN(Number(e.target.value)) && e.target.value%1 === 0) {
                        props.setQuantity(Number(e.target.value));
                    } else {
                        props.setQuantity(0);
                    }
                } 
         }
        }
    }
    return (
        <div>
            <button onClick={subtract}>-</button>
            <input id={`number-input-${props.productId}`} type="text" defaultValue={props.quantity} onChange={handleInput} />
            <button onClick={add}>+</button>
        </div>
    )
}