import { createContext } from 'react'

const WeatherContext = createContext({
  items: [],
  currentWeather: {},
  infoCurrentWeather: {},
  hoursWeatherItems: [],
  isValid: false,
  addItems: (data) => {},
  getHours: (date) => {},
  celsius: (kelvin) => {},
})

export default WeatherContext
