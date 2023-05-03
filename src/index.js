import ReactDOM from 'react-dom/client'
import App from './components/App/App'

import './static/styles/global.css'
import WeatherContextProvider from './store/Weather/WeatherContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>,
)
