import styles from './index.module.css'

import Cart from '../UI/Cart'

const Error = () => {
  return (
    <section className={styles.error}>
      <Cart class={styles['error__wrapper']}>
        <h2 className={styles['error__headline']}>An error has occurred!</h2>
        <p className={styles['error__description']}>
          You may have entered an incorrect city
        </p>
      </Cart>
    </section>
  )
}

export default Error
