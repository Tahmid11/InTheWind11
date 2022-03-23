import React, { useEffect } from "react";
import run from './assets/transparent.gif';
import dot from './assets/page1.jpg.png';
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

// This page displays weather information related to the location the user types into the search bar.
// The weather information displayed to the user is: The current temperature, chance of rain and wind speed.
// The user will only see a blank page till after they type a location and press enter.
 




function FirstPage(){

     const nav=useNavigate();

     const [Location,setLocation]=useState('');
     const [weather,setWeather]=useState([]);

     const [top3essentials,setTop3Essentials]=useState([]);
     let arrayOfTop3Essentials=[];


    // First API call that is used to convert the location the user enters into lon and lat to make use in another API.
    const firstUrl=`https://api.openweathermap.org/geo/1.0/direct?q=${Location},GB&limit=1&appid=d559bc18da1537d61bf16fb76b5e30d5`



// This checks to see if the local storage object is empty, if it isn't then we push to an array certain pieces of clothing depending on the temperature.
// Afer pushing to the array, we then use a hook to store the array and then use the current state(top3essentials) to display the array.
useEffect( () => {
  if (localStorage.getItem('Weather') === null) {
    console.log("It is empty");

  } 
  else{
    console.log("IT is not empty.")
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
  }
}, []);

  // This function checks if the enter was pressed then:
  // Stores the location the user entered to local storage to Chrome;
  // Stores the latitude and longitude to be used in the second API call.
  // Then we use the hook 'useState' to track specific data;
  // Finally we store in local memory in Chrome every piece of data to do with the weather and the current temperature.
  const searchLocation=(EVENT) =>{

    if (EVENT.key==="Enter"){   
      axios.get(firstUrl).then((Response)=>{ 
  
          localStorage.setItem('location', JSON.stringify(Response.data[0].name));
          document.getElementById("LocationHead").innerHTML = Response.data[0].name;
          
        
          setLocation('')
          let lat=(Response.data[0].lat)
          let lon=(Response.data[0].lon)

        
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&appid=d559bc18da1537d61bf16fb76b5e30d5&units=metric`).then((Reply)=>{
          setWeather(Reply.data)

      
          localStorage.setItem('Weather', JSON.stringify(Reply.data));
          localStorage.setItem('temp', Reply.data.current.temp);

      

      window.location.reload(false);

      })

        })
  

      } }
 
 

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

        {/* When the user hits enter when they type the location, they go to the function called 'searchLocation'. */}
        <input type="text" value={Location} className="searchBar" onChange={EVENT=> setLocation(EVENT.target.value)} placeholder="Type a Location" onKeyPress={searchLocation} ></input>

        {/* This checks to see if the hooks are empty and if they aren't they will display key pieces of information. */}
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
             <div className="dropdown-content">
             <form>
              <select id="myList">
                <option>+</option>
                <option>Cloud Cov: {weather.current.clouds}%</option>
                <option>Dew Point: {weather.current.dew_point}</option>
                <option>Relative Humidity: {weather.current.humidity}</option>
                <option>Atomic Pressure: {weather.current.pressure}</option>
              </select>
            </form>
            </div>
          </div>

          <div className="dropdown">
              <div className="dropdown-content">
             <form>
             <select id="myList">
                <option>+</option>
                <option>Cloud Cov: {weather.current.clouds}%</option>
                <option>Dew Point: {weather.current.dew_point}</option>
                <option>Relative Humidity: {weather.current.humidity}</option>
                <option>Atomic Pressure: {weather.current.pressure}</option>
              </select>
            </form>
            </div>
          </div>

          <div className="dropdown">
          <div className="dropdown-content">
             <form>
             <select id="myList">
                <option>+</option>
                <option>Cloud Cov: {weather.current.clouds}%</option>
                <option>Dew Point: {weather.current.dew_point}</option>
                <option>Relative Humidity: {weather.current.humidity}</option>
                <option>Atomic Pressure: {weather.current.pressure}</option>
              </select>
            </form>
            </div>
          </div>

        </div> : <div></div>}
        <img src={dot} className="dot" />


    </div>

      
    )
}
export default FirstPage;
