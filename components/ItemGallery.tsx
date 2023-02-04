import ItemListing from './ItemListing';
type props = {
    listings: Array<object>
}
export default function Gallery(props: props) {
    const renderListings = () => {
        return props.listings.map((item: object | any) => {
            return <ItemListing item={item}/>
        })
    }
    return(
        <div>
            {renderListings()}
        </div>
    )
}