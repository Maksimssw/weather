import { useReducer } from 'react'

import WeatherContext from './weather-context'

const stateReducer = {
  currentWeather: {},
  infoCurrentWeather: {},
  hoursWeatherItems: [],
  nextDays: [],
  isValid: false,
}

const weatherReducer = (state, action) => {
  if (action.type === 'ADD_ITEMS') {
    const { items, celsius, getDate, getHours } = action

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

    // Get the weather of the following days
    const updateNextDays = items.list
      .filter((list) => {
        return currentData !== getDate(list.dt_txt)
      })
      .filter((list) => {
        return getHours(list.dt_txt) === '15:00:00'
      })
      .map((list) => {
        const date = getDate(list.dt_txt)
        const week = new Date(date).toString().split('').splice(0, 3).join('')
        return { ...list, week: week }
      })

    return {
      currentWeather: updateCurrentWeather,
      infoCurrentWeather: updateInfoCurrentWeather,
      hoursWeatherItems: updateHoursWeatherItems,
      nextDays: updateNextDays,
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
      getHours: getHours,
    })
  }

  const celsius = (kelvins) => (kelvins - 273.15).toFixed(0)

  const getDate = (date) => date.split('').splice(0, 10).join('')
  const getHours = (date) => date.split('').splice(11, 16).join('')

  const weatherContext = {
    currentWeather: weather.currentWeather,
    infoCurrentWeather: weather.infoCurrentWeather,
    hoursWeatherItems: weather.hoursWeatherItems,
    nextDays: weather.nextDays,
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
