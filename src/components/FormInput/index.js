import { useRef } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import server from '../../server/server'

import search from '../../static/icons/search.svg'
import styles from './index.module.css'

const FormInput = () => {
  const inputValue = useRef()
  const { requsetСoordinates, requestWeather } = server()

  const submitHandler = (event) => {
    event.preventDefault()

    const city = inputValue.current.value
    if (city.trim().length === 0) return

    // Getting the coordinates of the city
    requsetСoordinates(city).then((coord) => {
      // Getting weather data
      requestWeather(coord).then((data) => console.log(data))
    })
  }

  return (
    <header className={`${styles.header} container`}>
      <form className={styles.form} onSubmit={submitHandler}>
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
