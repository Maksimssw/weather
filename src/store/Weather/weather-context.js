import { createContext } from 'react'

const WeatherContext = createContext({
  items: [],
  currentWeather: {},
  isValid: false,
  addItems: (data) => {},
  celsius: (kelvins) => {},
})

export default WeatherContext
