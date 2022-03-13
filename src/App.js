
// You cant use class to assign a class name, you need to use className.
// You can only put stuff within div.
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";

import { BrowserRouter as Router, Routes,Route} from "react-router-dom";





function App() {
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







    </div>
  );
}

export default App;
