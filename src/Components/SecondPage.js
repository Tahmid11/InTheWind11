import React from "react"
import {useNavigate} from "react-router-dom";
import dot from './assets/page2.png';
// function SecondPage(){
//     let nav=useNavigate();
//     function Happens(){
//         nav("./Components/FirstPage")
//      }
//     return(
//      <div>

//          <button onClick={Happens}>Go To First Page</button>
//          <p>Siu.</p>
//      </div>

//     )}
function SecondPage(){
    const navigate=useNavigate();

    return (<div>
        <h1>Second Page</h1>
        <p>This is the second page.</p>
        <button onClick={() => navigate("/ThirdPage")} className="thirdpage2">Go To Third Page</button>
        <button onClick={() => navigate("/FirstPage")}className="firstpage2">Go To First Page</button>
        <img src={dot} className="dot" />
        </div>
        
    )
    }
export default SecondPage;