import { useContext } from 'react'

import FormInput from '../FormInput'
import Weather from '../Weather'
import WeatherContext from '../../store/Weather/weather-context'
import Loading from '../Loading'
import server from '../../server/server'

function App() {
  const context = useContext(WeatherContext)

  const { loading, error } = server()

  return (
    <>
      <FormInput />
      <main>
        {context.isValid && !loading && !error && <Weather />}
        {loading && <Loading />}
      </main>
    </>
  )
}

export default App
