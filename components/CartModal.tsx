import styles from '../styles/Modal.module.scss';
export default function CartModal(props: {show: boolean}) {
    if (!props.show) {
        return null;
    }
    return (
        <div className={styles.cartModal}>
            Successfully added to cart!
        </div>
    )
}