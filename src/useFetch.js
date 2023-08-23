import {useState, useEffect} from 'react'

const useFetch = (url) =>{
  const [data,setData]=useState(null)
  const [isLoading,setIsLoading]=useState(true)
  const[error,setError]=useState(null)

  useEffect(()=>{
    setTimeout(() => {
      fetch(url)
        .then(response=>{
          if(!response.ok){
            throw Error('could not fetch data for that endpoint')
          }
          return response.json()})
        .then(data=>{
          setData(data)
          setIsLoading(false)
          setError(null)
        })
        .catch(err =>setError(err.message))
      
    }, 350)
   
    },[url])

    return {data, isLoading, error}
}

export default useFetch