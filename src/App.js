
// You cant use class to assign a class name, you need to use className.
// You can only put stuff within div.
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import { useState } from "react";
import axios from 'axios';

import { BrowserRouter as Router, Routes,Route} from "react-router-dom";

// Use back ticks for links (`) and then use $(variableName) to call the variable.

function App() {
  const [Location,setLocation]=useState('')
  const [data,setData]=useState({})
  const url2=`http://api.openweathermap.org/geo/1.0/direct?q=${Location},44 &limit=3&appid=d559bc18da1537d61bf16fb76b5e30d5`
  const url=`http://api.openweathermap.org/data/2.5/weather?q=${Location}&units=metric&APPID=d559bc18da1537d61bf16fb76b5e30d5`
  const searchLocation=(EVENT) =>{
    if (EVENT.key==="Enter"){
      axios.get(url).then((Response)=>{
        setData(Response.data)
        console.log(Response.data)
    })

  }}

  return (
    
    <div className="App">
      

      <Router>
        <Routes>

  

          <Route path="/" element={<FirstPage/>}></Route>
          <Route path="/FirstPage" element={<FirstPage/>}></Route>
          
          <Route path="/SecondPage" element={<SecondPage/>}/>
          <Route path="/ThirdPage" element={<ThirdPage/>}/>
          

          </Routes>
          
      </Router>
      <div className="searchBar">
        <input type="text" value={Location} className="searchBar" onChange={EVENT=> setLocation(EVENT.target.value)} placeholder="Type a Location" onKeyPress={searchLocation}></input>
      </div>
      








    </div>
  );
}

export default App;
