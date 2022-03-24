import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";

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
            new_a.push("Wear A Wind Resistant Jacket")
            new_a.push("Running Shoes")
            new_a.push("Running Socks")
            new_a.push("A Sports Cap")
            new_a.push("High Visibility Clothing")
            new_a.push("Wear Gloves")
            new_a.push("Headlamp")
        }
        setItems(new_a);
    }, []);

    return (
    <div>
        <div className="page3_title">
            <h1>Essentials</h1>
        </div>

        {new_a.length===5? <div className="reccomendations">
        <div id="items_for_clear_and_fewClouds">
            <h3>Recommended Clothing &#38; Items</h3>
            <p>{items[0]}</p>
            <p>{items[1]}</p>
            <p>{items[2]}</p>
            <p>{items[3]}</p>
            <p>{items[4]}</p>
            <p>{items[5]}</p>
          </div>

        </div> :
         <div id="items_for_rain_showerRain_andEverythingElse">
             <h3><u>Recommended Clothing &#38; Items</u></h3>
             <p>{items[0]}</p>
             <p>{items[1]}</p>
             <p>{items[2]}</p>
             <p>{items[3]}</p>
             <p>{items[4]}</p>
             <p>{items[5]}</p>
             <p>{items[6]}</p>
        </div>}
        <div id="Injury_And_Prevention">
        <h3><u>Injury &#38; Prevention </u></h3>
            
            <section id="Injury">

                <h4>Types of Different Injuries:</h4>
                
                
                    <h4>Knee Pain:</h4>
                    <p>
                        Dull pain which is around the front, behind or around the knee/kneecap.
                    </p>
                    <h4>Achiles Pain:</h4>
                    <p>
                        Pain or swelling at the back of the ankle or heel. The pain may be minor but continous or sharp and sudden.
                    </p>
            </section>

            <section id="Prevention">
                 <h3>Prevention Of Injuries:</h3>
                <p>
                    Preventing all the above can be down by properly warming up i.e. a light jog or a brisk walk or by
                    doing squats to engage the lower body. Furthermore, warming down after running will help with recovering.
                </p>


            </section>


               
        <a href="https://www.nhs.uk/live-well/exercise/knee-pain-and-other-running-injuries/" target="_blank" rel="noopener noreferrer">Click Here For Further Information</a>
        </div>

        <div id="Links_to_workout_plan">
        
            <h3>Workout Plans for 5K and 10K </h3>
            <ul>
                <li><h4><a href="https://www.nhs.uk/live-well/exercise/couch-to-5k-week-by-week/" target="_blank" rel="noopener noreferrer">Couch to 5K Plan</a></h4></li>
                <li><h4><a href="https://www.verywellfit.com/beginner-runners-10k-training-schedule-2911611" target="_blank" rel="noopener noreferrer">10K Training Plan</a></h4></li>
            </ul>

        </div>
        

        <div id="Purchasing_Items">
        <h3>Items To Purchase</h3>
            <ul>
                <div id="listOfItems">
                <li><h4><a href="https://www.sportsdirect.com/running/running-shoes/mens-running-shoes" target="_blank" rel="noopener noreferrer">Running Shoes</a></h4></li>
                <li><h4><a href="https://www.runnersneed.com/c/clothing.html" target="_blank" rel="noopener noreferrer">Running Gear</a></h4></li>
                <li><h4><a href="https://www.amazon.co.uk/Black-Diamond-HEADLAMP-Extremely-Rechargeable/dp/B081BBW9QQ?th=1&psc=1" target="_blank" rel="noopener noreferrer">Running Headlamp</a></h4></li>
                <li><h4><a href="https://www.hollandandbarrett.com/shop/sports-nutrition/pre-workout-energy/energy-gels/"target="_blank" rel="noopener noreferrer">Sports Gel</a> </h4></li>
                <li><h4><a href="https://www.runnersneed.com/c/accessories/hats.html" target="_blank" rel="noopener noreferrer">Running Cap</a></h4></li>
                </div>
            </ul>
        </div>
        <div className="button_poss">
            <button  onClick={() => nav("/ThirdPage")}className="button_on_p">&nbsp;&nbsp;&nbsp;</button>
            <button  onClick={() => nav("/FirstPage")}className="button_going_to_p">&nbsp;&nbsp;&nbsp;</button>
            <button  onClick={() => nav("/SecondPage")}className="button_going_to_p">&nbsp;&nbsp;&nbsp;</button>
        </div>
        </div>

        
    )
}


export default ThirdPage