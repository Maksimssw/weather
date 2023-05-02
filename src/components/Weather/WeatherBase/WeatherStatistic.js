import styles from './index.module.css'

import wind from '../../../static/icons/wind.svg'
import humidity from '../../../static/icons/humidity.svg'
import rain from '../../../static/icons/rain.svg'

const WeatherStatistic = () => {
  return (
    <ul className={styles['weather-base__list']}>
      <li className={styles['weather-base__item']}>
        <img className={styles['weather-base__icon']} src={wind} alt="" />

        <span className={styles['weather-base__text']}>Wind</span>
        <div className={styles['weather-base__parameters']}>
          <span className={styles['weather-base__number']}>17</span>
          <span className={styles['weather-base__mean']}>km/h</span>
        </div>
      </li>

      <li className={styles['weather-base__item']}>
        <img className={styles['weather-base__icon']} src={humidity} alt="" />

        <span className={styles['weather-base__text']}>Humidity</span>
        <div className={styles['weather-base__parameters']}>
          <span className={styles['weather-base__number']}>31</span>
          <span className={styles['weather-base__mean']}>%</span>
        </div>
      </li>

      <li className={styles['weather-base__item']}>
        <img className={styles['weather-base__icon']} src={rain} alt="" />

        <span className={styles['weather-base__text']}>Rain</span>
        <div className={styles['weather-base__parameters']}>
          <span className={styles['weather-base__number']}>10</span>
          <span className={styles['weather-base__mean']}>%</span>
        </div>
      </li>
    </ul>
  )
}

export default WeatherStatistic
