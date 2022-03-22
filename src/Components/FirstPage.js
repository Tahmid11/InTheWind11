import React, { useEffect } from "react";
import run from './assets/transparent.gif';
import dot from './assets/page1.jpg.png';
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';


function FirstPage(){

     const nav=useNavigate();
     const [Location,setLocation]=useState('');
     const [weather,setWeather]=useState([]);
     const [top3essentials,setTop3Essentials]=useState([]);
     let arrayOfTop3Essentials=[];

     
    const [extraWeatherInformation,setExtraWeatherInformation]=useState([]);


  const url=`https://api.openweathermap.org/geo/1.0/direct?q=${Location},GB&limit=1&appid=d559bc18da1537d61bf16fb76b5e30d5`

  //saving data inputs 


useEffect( () => {
  if (localStorage.getItem('Weather') === null) {
    // set the weather state
    console.log("It is empty");

  } 
  else{
    console.log("IT is not empty.")
    // String->JSON Object
    const weatherObject = JSON.parse(localStorage.getItem('Weather'));
    document.getElementById("LocationHead").innerHTML = JSON.parse(localStorage.getItem('location'));
    if (Math.round(weatherObject.current.temp)>=15){
      arrayOfTop3Essentials.push("Tshirt")
      arrayOfTop3Essentials.push("Water Bottle")
      arrayOfTop3Essentials.push("Applys sunscreen")
    }
    else{
      arrayOfTop3Essentials.push("Trousers/Tights")
      arrayOfTop3Essentials.push("Long Sleeve Top/Tshirt")
      arrayOfTop3Essentials.push("Lightweight Running Jacket")
    }
    setWeather(weatherObject)
    setTop3Essentials(arrayOfTop3Essentials)

      // arrayOfExtraWeatherInformation.push(weatherObject.data.current.dew_point)
      // arrayOfExtraWeatherInformation.push(Reply.data.humidity)
      // setExtraWeatherInformation(arrayOfExtraWeatherInformation)
      // console.log("This is array of Extra Info:",arrayOfExtraWeatherInformation)


  }
}, []);
  const searchLocation=(EVENT) =>{

    if (EVENT.key==="Enter"){   
      axios.get(url).then((Response)=>{ 
  
          localStorage.setItem('location', JSON.stringify(Response.data[0].name));
          document.getElementById("LocationHead").innerHTML = Response.data[0].name;
          
        
        setLocation('')
        let lat=(Response.data[0].lat)
        let lon=(Response.data[0].lon)

        
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&appid=d559bc18da1537d61bf16fb76b5e30d5&units=metric`).then((Reply)=>{
      setWeather(Reply.data)
      setExtraWeatherInformation(Reply.data)
      
      


      // JSON Object ->String.
      localStorage.setItem('Weather', JSON.stringify(Reply.data));
      localStorage.setItem('temp', Reply.data.current.temp);

      

      window.location.reload(false);

      })

        })
  

      } }
  const hasBeenClicked=() =>{
    console.log(extraWeatherInformation)
  }
 

    return (

    <div>
      <h1 id="LocationHead" className="LocationHeader">Welcome</h1>
      <img src={run} className="rungif" />
        <div className="navbutton">
        <div style={{float: 'left'}}>
        <button onClick={() => nav("/ThirdPage")} className="thirdpage1">Left</button>
        </div>
        <div style={{float: 'right'}}>
        <button onClick={() => nav("/SecondPage")}className="secondpage1">Right</button>
        </div>

        </div>


        <input type="text" value={Location} className="searchBar" onChange={EVENT=> setLocation(EVENT.target.value)} placeholder="Type a Location" onKeyPress={searchLocation} ></input>


        {weather.length !== 0 && top3essentials.length!==0? <div className="results">
        <div className="temp">
        {Math.round(weather.current.temp)}</div>
          <div className="Wdescription">
          {weather.current.weather[0].description}
          </div>
          {weather.current.clouds},
          {weather.current.wind_speed}
          <div className="Top3Essentials">
            {top3essentials[0]},
            {top3essentials[1]},
            {top3essentials[2]}
          </div>
          <div className="dropdown">
              <button className="dropbtn1">Dropdown1</button>
             <div className="dropdown-content">
                <button onClick={hasBeenClicked}>Clouds</button>
                <a href="#">Dew Point</a>
                <a href="#">Relative Humidity</a>
                </div>
          </div>
          <div className="dropdown">
              <button className="dropbtn2">Dropdown2</button>
             <div className="dropdown-content">
                <a>Clouds</a>
                <a>Dew Point</a>
                <a>Relative Humidity</a>
                </div>
          </div>
          <div className="dropdown">
              <button className="dropbtn3">Dropdown</button>
             <div className="dropdown-content">
                <a href="#">Clouds</a>
                <a href="#">Dew Point</a>
                <a href="#">Relative Humidity</a>
                </div>
          </div>

        </div> : <div></div>}
        <img src={dot} className="dot" />


    </div>

      
    )
}
export default FirstPage;
