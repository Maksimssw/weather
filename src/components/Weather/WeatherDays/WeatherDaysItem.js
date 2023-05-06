import styles from './index.module.css'

const WeatherDaysItem = (props) => {
  const { image, temp, week } = props
  const imageWeather = require(`../../../static/images/weather/${image}.webp`)

  return (
    <li className={`${styles['weather-days__item']} grid-row`}>
      <span className={styles['weather-days__text']}>{week}</span>
      <img
        src={imageWeather}
        alt=""
        className={styles['weather-days__image']}
      />
      <span className={styles['weather-days__temp']}>{temp}°</span>
    </li>
  )
}

export default WeatherDaysItem
