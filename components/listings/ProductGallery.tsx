import Product from './Product';
import styles from '../../styles/ProductGallery.module.scss';

export default function Gallery(props: { products: Array<object> }) {
    const renderListings = () => {
        return props.products.map((product: object | any, index: number) => {
            const { id, title, image, price, stock, url } = product;
            return <Product stock={stock} key={index} id={id} name={title} image={image} price={price} url={url} />
        })
    }
    return (
        <div className={styles.productGallery}>
            {renderListings()}
        </div>
    )
}