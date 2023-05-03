import styles from './index.module.css'

import wind from '../../../static/icons/wind.svg'
import humidity from '../../../static/icons/humidity.svg'
import clouds from '../../../static/icons/clouds.svg'

const WeatherStatistic = (props) => {
  return (
    <ul className={styles['weather-base__list']}>
      <li className={styles['weather-base__item']}>
        <img className={styles['weather-base__icon']} src={wind} alt="" />

        <span className={styles['weather-base__text']}>Wind</span>
        <div className={styles['weather-base__parameters']}>
          <span className={styles['weather-base__number']}>{props.wind}</span>
          <span className={styles['weather-base__mean']}>m / s</span>
        </div>
      </li>

      <li className={styles['weather-base__item']}>
        <img className={styles['weather-base__icon']} src={humidity} alt="" />

        <span className={styles['weather-base__text']}>Humidity</span>
        <div className={styles['weather-base__parameters']}>
          <span className={styles['weather-base__number']}>
            {props.humidity}
          </span>
          <span className={styles['weather-base__mean']}>%</span>
        </div>
      </li>

      <li className={styles['weather-base__item']}>
        <img className={styles['weather-base__icon']} src={clouds} alt="" />

        <span className={styles['weather-base__text']}>Сlouds</span>
        <div className={styles['weather-base__parameters']}>
          <span className={styles['weather-base__number']}>{props.clouds}</span>
          <span className={styles['weather-base__mean']}>%</span>
        </div>
      </li>
    </ul>
  )
}

export default WeatherStatistic
