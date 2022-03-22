
// You cant use class to assign a class name, you need to use className.
// You can only put stuff within div.

import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";




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
  
  var varTemp= localStorage.getItem('temp');



  return ( 



    <div className={
      (typeof varTemp != "null") 
      ? ((varTemp>15)
      ? 'background2' : 'background1') :'background3'}>
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


