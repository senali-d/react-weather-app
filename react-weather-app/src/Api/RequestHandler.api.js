import axios from 'axios'

const Request = axios.create({
  baseURL: 'http://api.openweathermap.org',
})

export default Request
