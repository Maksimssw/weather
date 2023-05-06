import Cart from '../../UI/Cart'
import WeatherDaysItem from './WeatherDaysItem'

import styles from './index.module.css'

const WeatherDays = () => {
  return (
    <Cart class={styles['weather-days']}>
      <ul className={styles['weather-days__list']}>
        <WeatherDaysItem />
      </ul>
    </Cart>
  )
}

export default WeatherDays
