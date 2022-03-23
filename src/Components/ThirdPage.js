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
            new_a.push("Wear Lighter Coloured Clothing")
            new_a.push("Sports gels")
        }else if(weatherObject.daily[0].weather[0].description==="few clouds"){
            new_a.push("Wear Lighter Coloured Clothing")
            new_a.push("Running Shoes")
            new_a.push("Running Socks")
            new_a.push("Wear a headband")
            new_a.push("Sports gels")
        }else if(weatherObject.daily[0].weather[0].description==="shower rain" ||weatherObject.daily[0].weather[0].description==="rain"){
            new_a.push("Wear a Water Resistant Jacket")
            new_a.push("Running Shoes")
            new_a.push("Running Socks")
            new_a.push("A Sports Cap")
            new_a.push("High Visibility Clothing")
            new_a.push("Headlamp")
            new_a.push("Apply Anti Chafe Balm To Prevent Chafing.")
        }else{
            new_a.push(" Wear A Wind Resistant Jacket")
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
        <h1>Reccomendations, Injury & Prevention and Workout Plan </h1>

        
        <div style={{float: 'right'}}>
        <button onClick={() => nav("/FirstPage")}className="secondpage1">Right</button>
        </div>
        
        


        {new_a.length===5? <div className="reccomendations">
        <div id="items_for_clear_and_fewClouds">
            <p>{items[0]}</p>
            <p>{items[1]}</p>
            <p>{items[2]}</p>
            <p>{items[3]}</p>
            <p>{items[4]}</p>
            <p>{items[5]}</p>
          </div>

        </div> :
         <div id="items_for_rain_showerRain_andEverythingElse">
             <p>{items[0]}</p>
             <p>{items[1]}</p>
             <p>{items[2]}</p>
             <p>{items[3]}</p>
             <p>{items[4]}</p>
             <p>{items[5]}</p>
             <p>{items[6]}</p>
        </div>}
        {/* <button onClick={myFunction}> Click here for injury.</button> */}
        <div id="Injury_And_Prevention">
            <h1>Injury & Prevention </h1>
            
            <section id="Injury">

                <h2>Types of Different Injuries:</h2>
                
                <h2 id="KneePain">
                    Knee Pain:
                    <p>
                        Dull pain which is around the front, behind or around the knee/kneecap.
                        <link></link>
                    </p>

                </h2>
                <h2 id="Achiles Pain"> 
                    Achiles Pain:
                    <p>
                        Pain or swelling at the back of the ankle or heel. The pain may be minor but continous or sharp and sudden.
                    </p>

                </h2>

                
            </section>

            <section id="Prevention">
                <h2 id="Prevention"> Prevention Of Injuries:
                <p>
                    Preventing all the above can be down by properly warming up i.e. a light jog or a brisk walk or by
                    doing squats to engage the lower body. Furthermore, warming down after running will help with recovering.
                </p>


                </h2>
            </section>


               
        <a href="https://www.nhs.uk/live-well/exercise/knee-pain-and-other-running-injuries/" target="_blank" rel="noopener noreferrer">Click Here For Further Information</a>
        </div>

        <div id="Links_to_workout_plan">
        
            <h1>Workout Plans for 5K and 10K </h1>
                <section id="5k">
                    <h2>Couch to 5K</h2>
                    <a href="https://www.nhs.uk/live-well/exercise/couch-to-5k-week-by-week/" target="_blank" rel="noopener noreferrer">Link To Couch To 5K Plan</a>
                </section>
                <section id="10K">
                    <h2>10K Plan</h2>
                    <a href="https://www.verywellfit.com/beginner-runners-10k-training-schedule-2911611" target="_blank" rel="noopener noreferrer">Link to 10K Plan</a>

                </section>

        </div>
        <img src={dot} className="dot" />
        </div>

        
    )
}
// function myFunction() {
//     var x = document.getElementById("Injury_And_Prevention");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

export default ThirdPage