type listing = {
    item: {
        title: string
    }
}
export default function ItemListing(props: listing) {
    return (
    <div>
        <h4>{props.item.title}</h4>
    </div>
    )
}