import ProductListing from './ProductListing';

export default function Gallery(props: {products: Array<object>}) {
    const renderListings = () => {
        return props.products.map((product: object | any) => {
            return <ProductListing product={product}/>
        })
    }
    return(
        <div>
            {renderListings()}
        </div>
    )
}