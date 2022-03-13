import React from "react";
import { useNavigate } from "react-router-dom";

function ThirdPage(){
    const nav=useNavigate();

    return (<div>
        <h1>Third Page</h1>
        <p>This is the third page.</p>
        <button onClick={()=>nav(0)}>Third Page</button>
        <button onClick={() => nav("/FirstPage")}>Go To First Page</button>
        <button onClick={() => nav("/SecondPage")}>Go To Second Page</button>
        </div>
    )
}
export default ThirdPage