export default function CartQuantity(props: {quantity: number, setQuantity: Function}) {
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
                    if (!Number.isNaN(Number(e.target.value))) {
                        props.setQuantity(Number(e.target.value));
                        //console.log(e.target.value);
                    } 
                } else {
                    props.setQuantity(1);
                }
         }
        }
    }
    return (
        <div>
            <button onClick={subtract}>-</button>
            <input id='number-input' type="text" defaultValue={props.quantity} onChange={handleInput} />
            <button onClick={add}>+</button>
        </div>
    )
}