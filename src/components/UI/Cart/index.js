import styles from './index.module.css'

const Cart = (props) => {
  return (
    <li
      className={`
        ${styles.cart}
        ${props.class}
      `}
    >
      {props.children}
    </li>
  )
}

export default Cart
