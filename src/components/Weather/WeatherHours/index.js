import { useContext } from 'react'

import Cart from '../../UI/Cart'
import WeatherHoursItem from './WeatherHoursItem'
import WeatherContext from '../../../store/Weather/weather-context'

import styles from './index.module.css'

const WeatherHours = () => {
  const context = useContext(WeatherContext)
  const { hoursWeatherItems, getHours, celsius } = context

  const hoursList = hoursWeatherItems.map((list) => {
    return (
      <WeatherHoursItem
        key={list.dt_txt}
        maxTemp={celsius(list.main.temp_max)}
        minTemp={celsius(list.main.temp_min)}
        image={list.weather[0].main.toLowerCase()}
        hour={getHours(list.dt_txt)}
      />
    )
  })

  return (
    <Cart class={styles['weather-hours']}>
      <ul className={styles['weather-hours__list']}>{hoursList}</ul>
    </Cart>
  )
}

export default WeatherHours
