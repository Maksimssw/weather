import styles from './index.module.css'

const WeatherDaysItem = () => {
  const image = require(`../../../static/images/weather/clouds.webp`)

  return (
    <li className={`${styles['weather-days__item']} grid-row`}>
      <span className={styles['weather-days__text']}>Mon</span>
      <img src={image} alt="" className={styles['weather-days__image']} />
      <span className={styles['weather-days__temp']}>17°</span>
    </li>
  )
}

export default WeatherDaysItem
