import { useRef } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'

import search from '../../static/icons/search.svg'
import styles from './index.module.css'

const FormInput = () => {
  const inputValue = useRef()

  return (
    <header className={`${styles.header} container`}>
      <form action="" className={styles.form}>
        <Input
          ref={inputValue}
          class={styles['form__input']}
          placeholder="Write the city..."
        />

        <Button class={styles['form__button']}>
          <img className={styles['form__search']} src={search} alt="" />
        </Button>
      </form>
    </header>
  )
}
export default FormInput
