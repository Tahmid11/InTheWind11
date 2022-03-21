import React from "react";

import {useNavigate} from "react-router-dom";

import { useState } from "react";

import axios from 'axios';


function FirstPage(){
  let LocationInput ="";
     const nav=useNavigate();
     const [Location,setLocation]=useState('');
     const [LocationAPI,setLocation2]=useState('');

    const [weather,setWeather]=useState([]);



  



  const url=`https://api.openweathermap.org/geo/1.0/direct?q=${Location},GB&limit=1&appid=d559bc18da1537d61bf16fb76b5e30d5`



  const searchLocation=(EVENT) =>{

    if (EVENT.key==="Enter"){      

      axios.get(url).then((Response)=>{ 
        
        axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${Location},GB&limit=1&appid=d559bc18da1537d61bf16fb76b5e30d5`).then((Reply)=>{
          setLocation2(Reply.data)
    
    
    
          })

        setLocation('')
        let lat=(Response.data[0].lat)
        let lon=(Response.data[0].lon)
        
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&appid=d559bc18da1537d61bf16fb76b5e30d5&units=metric`).then((Reply)=>{
      setWeather(Reply.data)



      })

        })
  

      }}
      

    return (

    <div>
        
        <button onClick={() => nav("/ThirdPage")}>Go To Third Page</button>
        <button onClick={() => nav("/SecondPage")}>Go To Second Page</button>


        <input type="text" value={Location} className="searchBar" onChange={EVENT=> setLocation(EVENT.target.value)} placeholder="Type a Location" onKeyPress={searchLocation} ></input>


        
    
          
        {(!typeof weather.current!="undefined" && weather.length!=0)? (
          
        
        <div className="results">
          {console.log(weather)}
          {console.log(Location)}
          <h1>{LocationAPI[0].name}</h1>
          {weather.current.weather[0].description},
          {weather.current.temp},
          {weather.current.clouds},
          {weather.current.wind_speed}
        </div>
    
        ):('')}


    </div>

      
    )
}
export default FirstPage;