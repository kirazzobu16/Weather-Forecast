import "../App.css"
import Container from 'react-bootstrap/Container';
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseWeather} from '../Context/WeatherContext';
import SetButton from 'react-bootstrap/Button';
import { UseTheme } from "../Context/ThemeContext";

function Weather() {
  const APP_KEY="1155fa242ab2482b9df122025222511"
  const {weather,setWeather}=UseWeather()
  let cityInput=""
  const {theme}=UseTheme()

  //City inputa bir değer veriliyor. Bu değer istenilen şehrin bulunmasında yardımcı olacak.
  function cityText(){
    document.querySelector("input").addEventListener("input",(e)=>{
      e.preventDefault();
      cityInput=e.target.value
     
    })
  }
  
  //cityInput'a verilen değer havadurumu api'sında gösterilen değerin şehir kısmına yazdırır.
  async function getData(value){
      if(value==="") return;
      const data=await (await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=3&aqi=no&alerts=no`)).json()
      console.log(data)
      setWeather(data.forecast.forecastday)
  }

  
  
  return (
    <div>
      
      <Container>
      <Row>
        <Col><h1>HAVA DURUMU</h1></Col>  
      </Row>
      <Row>
        <Col className='search'>
            
              <input type="text" placeholder='Search a City...' onChange={cityText}/>
              <SetButton variant={theme==="light"?"primary":"info"} size="sm"  onClick={()=>{getData(cityInput)}}>Search</SetButton>
            
        </Col>
      </Row>
      <Row>
        <Col>
        
         <hr />
            {

              //Api'daki değerleri gösterir.
              weather.map((item,index)=>(
                 
              <ul key={index} className={item.day.condition.text==="Sunny"?"Sunny": ""|| item.day.condition.text==="Moderate rain"?"Raining":""}>
              
                <li><h1>{item.date}</h1></li>
                <li><img src={item.day.condition.icon} alt=""/></li>
                <li className="condition">{item.day.condition.text} </li>
                <li className="condition">{item.day.mintemp_c} C/{item.day.maxtemp_c} C</li>
                <hr />
              </ul>
              
              ))
             
            }           
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default React.memo(Weather)