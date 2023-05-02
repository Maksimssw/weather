import Cart from "../../UI/Cart";

import clouds from '../../../static/images/weather/clouds.webp'
import mark from '../../../static/icons/mark.svg'

import styles from './index.module.css'
import WeatherStatistic from "./WeatherStatistic";

const WeatherBase = () => {
  return (
    <Cart class={styles['weather-base']}>
      <div>
        <img
          className={styles['weather-base__image']}
          src={clouds}
          alt=""
        />

        <div className={`${styles['weather-base__location']} grid-row`}>
          <img
            className='icon-20'
            src={mark}
            alt=""
          />

          <span>Rio do Sul, SC</span>
        </div>

        <div className={styles['weather-base__temp']}>
          <span className={styles['weather-base__medium']}>18</span>
          <span className={styles['weather-base__info']}>
            22°
            <i>16°</i>
          </span>
        </div>
      </div>
      <WeatherStatistic />
    </Cart>
  )
}

export default WeatherBase