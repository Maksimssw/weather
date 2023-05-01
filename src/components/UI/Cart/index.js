import styles from './index.module.css'

const Cart = (props) => {
  return (
    <div
      className={`
        ${styles.cart}
        ${props.class}
      `}
    >
      {props.children}
    </div>
  )
}

export default Cart