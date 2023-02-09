import ProductListing from './ProductListing';
import styles from '../styles/ProductGallery.module.scss';

export default function Gallery(props: {products: Array<object>}) {
    const renderListings = () => {
        return props.products.map((product: object | any, index: number) => {
            return <ProductListing key={index} product={product}/>
        })
    }
    return(
        <div className={styles.productGallery}>
            {renderListings()}
        </div>
    )
}