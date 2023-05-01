import Cart from "../../UI/Cart";

import styles from './index.module.css'
import clouds from '../../../static/images/weather/clouds.webp'

const WeatherBase = () => {
  return (
    <Cart class={styles['weather-base']}>
      <img
        className={styles['weather-base__icon']}
        src={clouds}
        alt=""
      />
    </Cart>
  )
}

export default WeatherBase