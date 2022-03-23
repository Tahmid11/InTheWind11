import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import dot from './assets/page3.png';

// This page provides reccomendations depending on the forecast on the day.
// For the Extension Features:
//  Includes common injuries runners may experience as well tips to prevent said injuries;
//  links to websites that provide workout plans for runners to help them run specific distances:
//  links to websites that sell items of clothing that may be beneficial to the runner.


function ThirdPage(){
    const weatherObject = JSON.parse(localStorage.getItem('Weather'));
    const nav=useNavigate();
    const [items,setItems]=useState([]);
    const new_a=[];

    useEffect( () => {
        if(weatherObject.daily[0].weather[0].description==="clear sky"){
            new_a.push("Running Shoes")
            new_a.push("Running Socks")
            new_a.push("Sports Cap")
            new_a.push("Sunscreen")
        }else if(weatherObject.daily[0].weather[0].description==="few clouds"){
            new_a.push("Wear Lighter Coloured Clothing")
            new_a.push("Running Shoes")
            new_a.push("Running Socks")
        }else if(weatherObject.daily[0].weather[0].description==="shower rain" ||weatherObject.daily[0].weather[0].description==="rain"){
            new_a.push("Wear a Water ResistantJacket")
            new_a.push("Running Shoes")
            new_a.push("Running Socks")
            new_a.push("A Sports Cap")
            new_a.push("High Visibility Clothing")
            new_a.push("Headlamp")
            new_a.push("Apply Anti Chafe Balm To Prevent Chafing.")
        }else{
            new_a.push("Wear a Water ResistantJacket Or a Wind Resistant Jacket")
            new_a.push("Running Shoes")
            new_a.push("Running Socks")
            new_a.push("A Sports Cap")
            new_a.push("High Visibility Clothing")
            new_a.push("Wear Gloves")
            new_a.push("Headlamp")
        }
        setItems(new_a);
    }, []);

    return (<div>
        <h1>Third Page</h1>
        <p>This is the third page.</p>
        <div style={{float: 'left'}}>

        </div>
        <div style={{float: 'right'}}>
        <button onClick={() => nav("/FirstPage")}className="secondpage1">Right</button>
        </div>
        
        <img src={dot} className="dot" />
        <button onClick= {myFunction}>Injury & Prevention Page</button>

        <div>{items}</div>
        <div id="Injury_And_Prevention">
            <h1>Injury & Prevention </h1>
            
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

                {/* Outside the application. */}
                <a href="https://www.nhs.uk/live-well/exercise/knee-pain-and-other-running-injuries/" target="_blank" rel="noopener noreferrer">Click here</a>

        </div>
        <button onClick= {workoutButton}>Workout</button>
        <div id="Links_to_workout_plan">
        
            <h1>Workout Plans for 5K and 10K </h1>
                <section id="5k">
                    <h2>Couch to 5K</h2>
                    <a href="https://www.nhs.uk/live-well/exercise/couch-to-5k-week-by-week/" target="_blank" rel="noopener noreferrer">Link To Couch To 5K Plan</a>
                </section>
                <section id="10K">
                    <h2>10K</h2>
                    <a href="https://www.verywellfit.com/beginner-runners-10k-training-schedule-2911611" target="_blank" rel="noopener noreferrer">Link to 10K Plan</a>

                </section>

        </div>
        </div>
        
    )
}
function myFunction() {
    var x = document.getElementById("Injury_And_Prevention");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function workoutButton() {
    var x = document.getElementById("Links_to_workout_plan");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
export default ThirdPage