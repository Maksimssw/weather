import Http from '../hooks/http.hook'

const server = () => {
  const { loading, error, request } = Http()

  const _key = '&appid=f5380ebdec55111ab3633d9509a44d74'
  const _api = 'https://api.openweathermap.org'

  const requsetСoordinates = async (city) => {
    const coordinates = await request(`
      ${_api}/geo/1.0/direct?q=${city}&limit=5${_key}
    `)

    return await coordinates[0]
  }

  const requestWeather = async (coord) => {
    const weather = await request(`
      ${_api}/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}${_key}
    `)

    return weather
  }

  return { loading, error, requsetСoordinates, requestWeather }
}

export default server
