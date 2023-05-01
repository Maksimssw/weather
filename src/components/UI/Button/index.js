import styles from './index.module.css'

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`
        ${styles.button}
        ${props.class}
      `}
    >
      {props.children}
    </button>
  )
}

export default Button