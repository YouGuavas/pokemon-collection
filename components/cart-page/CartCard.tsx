import Image from 'next/image';

type product = {
    title: string,
    id: string,
    image: string,
    description: string,
    price: string,
    stock: number
}

export default function CartCard(props: {product: product; quantity: number}) {
    return (
        <div>
        <h4>{props.product.title}</h4>
        <Image src={props.product.image} alt={`Preview of ${props.product.title}`} height={200} width={150}/>
        <p>{props.product.description}</p>
        <p>{props.quantity}</p>
        <p>${Number(props.product.price) * props.quantity}</p>
        </div>
    )
}