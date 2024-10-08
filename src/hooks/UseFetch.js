/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const UseFetch = (endpoint) => {
    const [data , setdata] = useState([])
    const [loading , setloading] = useState(false)
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchdata = async()=>{
     setloading(false)
     const response = await axios.get(endpoint)
     setdata(response.data.results)
     setloading(true)


    }

    useEffect(()=>{
        fetchdata()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[fetchdata])
  return (

    
    {data,loading}
  )
}

export default UseFetch
