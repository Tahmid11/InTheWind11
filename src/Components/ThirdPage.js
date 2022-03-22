import React from "react";
import { useNavigate } from "react-router-dom";
import dot from './assets/page3.png';

function ThirdPage(){
    const nav=useNavigate();

    return (<div>
        <h1>Third Page</h1>
        <p>This is the third page.</p>
        <div style={{float: 'left'}}>

        </div>
        <div style={{float: 'right'}}>
        <button onClick={() => nav("/FirstPage")}className="secondpage1">Right</button>
        </div>
        
        <img src={dot} className="dot" />
        <div>
            <h1>Injury And Prevention </h1>
            
            <section id="Injury">

                <h2>Types of Different Injuries:</h2>
                
                <h2 id="KneePain">
                    Knee Pain
                    <p>
                        It is a dull pain which is around the front, behind or around the knee/kneecap.
                        <link></link>
                    </p>

                </h2>
                <h2 id="Achiles Pain"> 
                    Achiles Pain
                    <p>
                        Pain or swelling at the back of the ankle or heel. The pain may be minor but continous or sharp and sudden.
                    </p>

                </h2>

                
            </section>

            <section id="Prevention">
                <h2 id="Prevention"> Prevention Of Injuries
                <p>
                    Preventing all the above can be down by properly warming up i.e. a light jog or a brisk walk or by
                    doing squats to engage the lower body. Furthermore, warming down after running will help with recovering.
                </p>


                </h2>
            </section>
            {/* Within the application */}
            <a href={'https://www.nhs.uk/live-well/exercise/knee-pain-and-other-running-injuries/'}>For Furher Information.</a>

                {/* Outside the application. */}
            <a href="https://www.nhs.uk/live-well/exercise/knee-pain-and-other-running-injuries/" target="_blank" rel="noopener noreferrer">Click here</a>

        </div>
        </div>
        
    )
}
export default ThirdPage