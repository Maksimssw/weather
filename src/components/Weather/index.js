import WeatherBase from "./WeatherBase";
import WeatherInfo from "./WeatherInfo";
import WeatherDays from "./WeatherDays";
import WeatherHours from "./WeatherHours";

import styles from './index.module.css'

const Weather = () => {
  return (
    <section className={`${styles.weather} container`}>
      <ul className={styles['weather__container']}>
        <WeatherBase />
        <WeatherInfo />
        <WeatherDays />
        <WeatherHours />
      </ul>
    </section>
  )
}

export default Weather