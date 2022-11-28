import {useEffect, useState,createContext,useContext} from "react"
import React from 'react'
import axios from "axios"

const WeatherContext=createContext()
 export const WeatherProvider=({children})=> {
   
    const [weather,setWeather]=useState([])
    
    
    const values={
        weather,
        setWeather
    } 

    
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  )
}

export const UseWeather=()=>useContext(WeatherContext)