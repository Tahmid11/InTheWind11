import React from "react";
import { useNavigate } from "react-router-dom";
import dot from './assets/page3.png';

function ThirdPage(){
    const nav=useNavigate();

    return (<div>
        <h1>Third Page</h1>
        <p>This is the third page.</p>
        <button onClick={() => nav("/FirstPage")}className="firstpage3">Go To First Page</button>
        <button onClick={() => nav("/SecondPage")}className="secondpage3">Go To Second Page</button>
        <img src={dot} className="dot" />
        </div>
    )
}
export default ThirdPage