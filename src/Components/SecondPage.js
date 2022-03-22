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
    const nav=useNavigate();

    return (<div>
        <h1>Second Page</h1>
        <p>This is the second page.</p>
        <div style={{float: 'left'}}>
        <button onClick={() => nav("/FirstPage")}className="firstpage3">Left</button>
        </div>
        <img src={dot} className="dot" />
        </div>
        
    )
    }
export default SecondPage;