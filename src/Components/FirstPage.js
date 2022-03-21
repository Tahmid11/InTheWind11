import React, { useEffect } from "react";

import {useNavigate} from "react-router-dom";

import { useState } from "react";

import axios from 'axios';


function FirstPage(){
  let LocationInput ="";
     const nav=useNavigate();
     const [Location,setLocation]=useState('');
     const [LocationAPI,setLocation2]=useState('');
     const [LocationSAVE,setLocationSAVE]=useState('');



    const [weather,setWeather]=useState([]);

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
    setWeather(weatherObject);
  }
}, []);


  const searchLocation=(EVENT) =>{

    if (EVENT.key==="Enter"){      

      
      axios.get(url).then((Response)=>{ 
        

          setLocation2(Response.data);
          setLocationSAVE(Response.data);
        
          
    
    


        setLocation('')
        let lat=(Response.data[0].lat)
        let lon=(Response.data[0].lon)

        
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&appid=d559bc18da1537d61bf16fb76b5e30d5&units=metric`).then((Reply)=>{
      setWeather(Reply.data)
      // JSON Object ->String.
      localStorage.setItem('Weather', JSON.stringify(Reply.data));
      





      })

        })
  

      }}

    // React.useEffect(() =>{
    //   {
    //   localStorage.setItem('location', JSON.stringify(LocationSAVE));
    // }});

    // React.useEffect(() =>{
    //   const data = localStorage.getItem('location');
    //   if (data){
    //     console.log(data);
    //     return data


    //   }
      
    // }


      


    return (

    <div>
      <h1 id="LocationHead" className="LocationHeader">Welcome</h1>
        
        <button onClick={() => nav("/ThirdPage")}>Go To Third Page</button>
        <button onClick={() => nav("/SecondPage")}>Go To Second Page</button>


        <input type="text" value={Location} className="searchBar" onChange={EVENT=> setLocation(EVENT.target.value)} placeholder="Type a Location" onKeyPress={searchLocation} ></input>


        {weather.length !== 0 ? <div className="results">
          {weather.current.weather[0].description},
          {weather.current.temp},
          {weather.current.clouds},
          {weather.current.wind_speed}
          {console.log(localStorage.getItem('location'))}

        </div> : <div></div>}
    
{/*           
        {(!typeof weather.current!="undefined" && weather.length!=0)? (
                  document.getElementById("LocationHead").innerHTML = LocationAPI[0].name,
          
          
        

    
        ):('')} */}


    </div>

      
    )
}

export default FirstPage;



// If the local storage is not blank; you set the weather state using the local storage values.
// A component is loaded which function is called? 