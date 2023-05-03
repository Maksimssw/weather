import { useContext } from 'react'

import Cart from '../../UI/Cart'
import WeatherContext from '../../../store/Weather/weather-context'

import styles from './index.module.css'

const WeatherInfo = () => {
  const context = useContext(WeatherContext)
  const { infoCurrentWeather } = context

  return (
    <Cart class={styles['weather-info']}>
      <span>{infoCurrentWeather.description}</span>

      <div className={styles['weather-info__content']}>
        <p>feels like</p>
        <span>{infoCurrentWeather.feels}°</span>
      </div>

      <div className={styles['weather-info__content']}>
        <p>pressure</p>
        <span>{infoCurrentWeather.pressure}</span>
      </div>

      <div className={styles['weather-info__content']}>
        <p>sea level</p>
        <span>{infoCurrentWeather.seaLevel}</span>
      </div>
    </Cart>
  )
}

export default WeatherInfo
