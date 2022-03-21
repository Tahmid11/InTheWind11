
// You cant use class to assign a class name, you need to use className.
// You can only put stuff within div.

import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";


import { BrowserRouter as Router, Routes,Route} from "react-router-dom";




function App() {
  // const [Location,setLocation]=useState('');
  // const [weather,setWeather]=useState([]);




  



  // const url=`https://api.openweathermap.org/geo/1.0/direct?q=${Location},GB&limit=1&appid=d559bc18da1537d61bf16fb76b5e30d5`
 
  // const searchLocation=(EVENT) =>{

  //   if (EVENT.key==="Enter"){

  //     axios.get(url).then((Response)=>{ 
        

  //       setLocation('')
  //       let lat=(Response.data[0].lat)
  //       let lon=(Response.data[0].lon)
        
  //     axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&appid=d559bc18da1537d61bf16fb76b5e30d5&units=metric`).then((Reply)=>{
  //     setWeather(Reply.data)


  //     // WHEN YOU PRINT CONSOLE.LOG(WEATHER) IT DONT WORK.
  //     })

  //       })
  

  //     }}


  return (



    <div className="background1">
      <main>
      <div className="App">
      

        <Router>
          <Routes>

  

            <Route path="/" element={<FirstPage/>}></Route>
            <Route path="/FirstPage" element={<FirstPage/>}></Route>
    
            <Route path="/SecondPage" element={<SecondPage/>}/>
            <Route path="/ThirdPage" element={<ThirdPage/>}/>
          

          </Routes>
          
      </Router>
        </div>
      </main>
  </div>
  )
}

 
export default App;


