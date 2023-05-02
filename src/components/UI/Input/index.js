import { forwardRef } from 'react'

import styles from './index.module.css'

const Input = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className={`
        ${styles.input}
        ${props.class}
      `}
      type={props.type}
      placeholder={props.placeholder}
    />
  )
})

export default Input
