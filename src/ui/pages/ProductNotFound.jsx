import styles from "./ProductNotFound.module.css"
import { TbZoomCancel } from 'react-icons/tb'

const ProductNotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <TbZoomCancel size={36} />
      </div>
      <div className={styles.text}>
        <p className={styles.title}>Product not found</p>
        <p className={styles.subtitle}>We couldn't find what you're looking for.</p>
      </div>
    </div>
  )
}

export default ProductNotFound