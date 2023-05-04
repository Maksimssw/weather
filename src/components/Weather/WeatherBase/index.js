import { useContext } from 'react'
import WeatherContext from '../../../store/Weather/weather-context'
import Cart from '../../UI/Cart'
import WeatherStatistic from './WeatherStatistic'

import mark from '../../../static/icons/mark.svg'

import styles from './index.module.css'

const WeatherBase = () => {
  const context = useContext(WeatherContext)
  const { currentWeather } = context

  const weatherIcon = require(`../../../static/images/weather/${currentWeather.weather}.webp`)

  return (
    <Cart class={styles['weather-base']}>
      <div>
        <img
          className={styles['weather-base__image']}
          src={weatherIcon}
          alt=""
        />

        <div className={`${styles['weather-base__location']} grid-row`}>
          <img className="icon-20" src={mark} alt="" />

          <span>
            {currentWeather.city}, {currentWeather.country}
          </span>
        </div>

        <div className={styles['weather-base__temp']}>
          <span className={styles['weather-base__medium']}>
            {currentWeather.temp}
          </span>
          <span className={styles['weather-base__info']}>
            {currentWeather.maxTemp}°<i>{currentWeather.minTemp}°</i>
          </span>
        </div>
      </div>
      <WeatherStatistic
        humidity={currentWeather.humidity}
        wind={currentWeather.wind}
        clouds={currentWeather.clouds}
      />
    </Cart>
  )
}

export default WeatherBase
