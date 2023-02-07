import Image from 'next/image'

type product = {
    title: string,
    id: string,
    image: string,
    description: string,
    price: string
}
export default function ProductListing(props: {product: product}) {
    return (
    <div>
        <h4>{props.product.title}</h4>
        <Image src={props.product.image} alt={props.product.description} height={200} width={150}/>
        <p>{props.product.description}</p>
        <p>${props.product.price}</p>
    </div>
    )
}