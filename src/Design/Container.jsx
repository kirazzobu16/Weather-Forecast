import React from 'react'
import SetButton from './Button'
import { UseTheme } from '../Context/ThemeContext'
import Weather from './Weather'
import "../App.css"




function Container() {
    const {theme}=UseTheme()
  return (
    <div className={`app ${theme==="dark"?theme:"light"}`}>
        
        <SetButton/>
        <br /> <br />
        <Weather/>
         
    </div>
  )
}

export default Container