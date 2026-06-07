import { Link } from "react-router"
import styles from "./NotFound.module.css"
import { TbError404 } from 'react-icons/tb'


const NotFound = () => {


  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <TbError404 size={36} />
      </div>
      <div className={styles.text}>
        <p className={styles.title}>Page not found</p>
        <p className={styles.subtitle}>This page doesn't exist or has been moved.</p>
      </div>
      <Link to={"/"}  className={styles.btn} >Go home</Link>
    </div>
  )
}

export default NotFound