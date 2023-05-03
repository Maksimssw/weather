import WeatherContext from './weather-context'
import { useReducer } from 'react'

const stateReducer = {
  items: [],
  currentWeather: {},
  infoCurrentWeather: {},
  isValid: false,
}

const weatherReducer = (state, action) => {
  if (action.type === 'ADD_ITEMS') {
    const { items, celsius } = action

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

    return {
      items: action.items,
      currentWeather: updateCurrentWeather,
      infoCurrentWeather: updateInfoCurrentWeather,
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
    })
  }

  const celsius = (kelvins) => (kelvins - 273.15).toFixed(0)

  const weatherContext = {
    items: weather.items,
    currentWeather: weather.currentWeather,
    infoCurrentWeather: weather.infoCurrentWeather,
    isValid: weather.isValid,
    addItems: addItemsHandler,
    celsius: celsius,
  }

  return (
    <WeatherContext.Provider value={weatherContext}>
      {props.children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider
