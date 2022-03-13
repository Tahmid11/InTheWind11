import React from "react";
import {useNavigate} from "react-router-dom";

// function FirstPage(){
//     let navigate=useNavigate();
//     function Handle(){
//         navigate("./Components/secondPage")
//     }
//     return(
//         <div>
//             <button onClick={Handle}>Go To Second Page</button>
//             <p>This should only be seen in first page.</p>
            

//         </div>
    
    
//     )
// }

function FirstPage(){
     const nav=useNavigate();

    return (<div>
        <h1>First Page</h1>
        <p>This is the First page</p>
        
        <button onClick={() => nav("/ThirdPage")}>Go To Third Page</button>
        <button onClick={()=>nav(0)}>First Page</button>
        <button onClick={() => nav("/SecondPage")}>Go To Second Page</button>
        </div>
    )
}
export default FirstPage;