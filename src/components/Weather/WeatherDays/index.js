import { useContext } from 'react'

import WeatherContext from '../../../store/Weather/weather-context'
import Cart from '../../UI/Cart'
import WeatherDaysItem from './WeatherDaysItem'

import styles from './index.module.css'

const WeatherDays = () => {
  const context = useContext(WeatherContext)
  const { nextDays, celsius } = context
  const daysList = nextDays.map((day) => {
    return (
      <WeatherDaysItem
        week={day.week}
        temp={celsius(day.main.temp)}
        image={day.weather[0].main.toLowerCase()}
      />
    )
  })

  return (
    <Cart class={styles['weather-days']}>
      <ul className={styles['weather-days__list']}>{daysList}</ul>
    </Cart>
  )
}

export default WeatherDays
