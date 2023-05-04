import styles from './index.module.css'

const WeatherHoursItem = (props) => {
  const { image, hour, minTemp, maxTemp } = props
  const imageWeather = require(`../../../static/images/weather/${image}.webp`)

  return (
    <li className={styles['weather-hours__item']}>
      <span className={styles['weather-hours__time']}>{hour}</span>
      <img
        className={styles['weather-hours__image']}
        src={imageWeather}
        alt=""
      />
      <span className={styles['weather-hours__info']}>
        {maxTemp}°<i>{minTemp}°</i>
      </span>
    </li>
  )
}

export default WeatherHoursItem
