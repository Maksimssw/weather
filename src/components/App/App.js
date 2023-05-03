import { useContext, useState } from 'react'

import FormInput from '../FormInput'
import Weather from '../Weather'
import WeatherContext from '../../store/Weather/weather-context'
import Loading from '../Loading'

function App() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const context = useContext(WeatherContext)

  const toggleStateHandler = (loading, error) => {
    setLoading(loading)
    setError(error)
  }

  return (
    <>
      <FormInput inToggleState={toggleStateHandler} />
      <main>
        {context.isValid && !loading && !error && <Weather />}
        {loading && <Loading />}
      </main>
    </>
  )
}

export default App
