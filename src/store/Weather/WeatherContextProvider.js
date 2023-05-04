import WeatherContext from './weather-context'
import { useReducer } from 'react'

const stateReducer = {
  items: [],
  currentWeather: {},
  infoCurrentWeather: {},
  hoursWeatherItems: [],
  isValid: false,
}

const weatherReducer = (state, action) => {
  if (action.type === 'ADD_ITEMS') {
    const { items, celsius, getDate } = action

    // Getting current forecasts
    const updateCurrentWeather = {
      weather: items.list[0].weather[0].main.toLowerCase(),
      country: items.city.country,
      city: items.city.name,
      temp: celsius(action.items.list[0].main.temp),
      maxTemp: celsius(action.items.list[0].main.temp_max),
      minTemp: celsius(action.items.list[0].main.temp_min),
      humidity: items.list[0].main.humidity,
      wind: items.list[0].wind.speed.toFixed(0),
      clouds: items.list[0].clouds.all,
    }

    // Getting additional current forecasts
    const updateInfoCurrentWeather = {
      description: items.list[0].weather[0].description,
      feels: celsius(items.list[0].main.feels_like),
      pressure: items.list[0].main.pressure,
      seaLevel: items.list[0].main.sea_level,
    }

    // Today's weather clock
    const currentData = getDate(items.list[0].dt_txt)
    const updateHoursWeatherItems = items.list.filter((list, index) => {
      if (index === 0) return
      return getDate(list.dt_txt) === currentData
    })

    return {
      items: action.items,
      currentWeather: updateCurrentWeather,
      infoCurrentWeather: updateInfoCurrentWeather,
      hoursWeatherItems: updateHoursWeatherItems,
      isValid: true,
    }
  }

  return stateReducer
}

const WeatherContextProvider = (props) => {
  const [weather, dispatchWeather] = useReducer(weatherReducer, stateReducer)

  const addItemsHandler = (data) => {
    dispatchWeather({
      type: 'ADD_ITEMS',
      items: data,
      celsius: celsius,
      getDate: getDate,
    })
  }

  const celsius = (kelvins) => (kelvins - 273.15).toFixed(0)

  const getDate = (date) => date.split('').splice(0, 10).join('')
  const getHours = (date) => date.split('').splice(11, 16).join('')

  const weatherContext = {
    items: weather.items,
    currentWeather: weather.currentWeather,
    infoCurrentWeather: weather.infoCurrentWeather,
    hoursWeatherItems: weather.hoursWeatherItems,
    isValid: weather.isValid,
    addItems: addItemsHandler,
    getHours: getHours,
    celsius: celsius,
  }

  return (
    <WeatherContext.Provider value={weatherContext}>
      {props.children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider
