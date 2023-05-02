import useHttp from '../hooks/useHttp'

const server = () => {
  const { loading, error, request } = useHttp()

  const _key = '&appid=f5380ebdec55111ab3633d9509a44d74'

  const requsetСoordinates = async (city) => {
    const coordinates = await request(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5${_key}`,
    )

    return await coordinates.result
  }

  return { loading, error, requsetСoordinates }
}

export default server
