import { useState, useEffect, } from 'react'

import { WeatherData, } from '../Api'
import { LocalStorageGet, LocalStorageSet } from '../Utils/LocalStorage.util'

function Weather (props) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    try {
      const response = WeatherData(props);
      response.then(result => {
        setData([...data, result])
        const index = data.findIndex(cityId => cityId.id === result.id)
        if (index < 0) {
          setData([...data, result])
        } else {
          data[index] = result
          setData(data)
        }
        setIsLoading(false)
      })
    } catch (error) {
      setIsLoading(false)
      throw error
    }
  }, // eslint-disable-next-line
  [props])

  useEffect( () => {
    if (localStorage.getItem("wet")===null){
      setData([])
    } else {
      setData(LocalStorageGet("wet"))
    }
  }, [setData])

  useEffect( () =>{
    LocalStorageSet("wet", data)
  })
  return { data, setData, isLoading }
}

export { Weather }
