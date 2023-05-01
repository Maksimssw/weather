import styles from './index.module.css'
import WeatherBase from "./WeatherBase";

const Weather = () => {
  return (
    <section className={`${styles.weather} container`}>
      <ul className={styles['weather__container']}>
        <WeatherBase />
      </ul>
    </section>
  )
}

export default Weather