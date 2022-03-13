import React from "react"
import {useNavigate} from "react-router-dom";
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
        <button onClick={() => navigate("/ThirdPage")}>Go To Third Page</button>
        <button onClick={() => navigate("/FirstPage")}>Go To First Page</button>
        <button onClick={()=>navigate(0)}>Second Page</button>
        </div>
    )
    }
export default SecondPage;