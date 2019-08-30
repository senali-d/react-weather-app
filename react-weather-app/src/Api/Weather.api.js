import Request from './RequestHandler.api'

const WeatherData = async (cityName) => {
  const api_key = '8b7651aa9c2c8ecadc3331168ea236c7'
    try {
      const response = await Request.get(`/data/2.5/weather?q=${cityName}&appid=${api_key}`)
      const result = await response.data
      return result
    } catch (err) {
      throw err
    }
  }

export { WeatherData, }
