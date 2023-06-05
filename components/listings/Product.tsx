import Image from 'next/image'


import styles from '../../styles/ProductListing.module.scss';

interface ProductProps {
    id: number;
    name: string;
    price: number;
    image: string;
    url: string;
    stock: number;
}
const Product: React.FC<ProductProps> = ({ id, name, price, image, url, stock }) => {
    const renderStock = () => {
        if (stock < 2) {
            return <p className={styles.hurry}>Hurry! Only {stock} left!</p>
        } else {
            return <p></p>
        }
    }

    const handleAddToCart = () => {
        window.Snipcart.api.cart.items.add({
            id, name, price, quantity: 1,
        });
    };
    return (
        <div className={styles.listCard}>
            <h3>{name}</h3>
            <Image src={image} alt={`Preview of ${image}`} height={200} width={150} />
            <p>Price: ${price}</p>
            {renderStock()}
            <button data-item-image={image} data-item-url={url} data-item-max-quantity={stock} onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}

export default Product;