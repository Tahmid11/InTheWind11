import React from "react"
import {useNavigate} from "react-router-dom";
import dot from './assets/page2.png';

// This page provides weather information across a 6 day period as well the time for sunrise and sunset.
// The weather information it provides is: 









function SecondPage(){
    const nav=useNavigate();
    var dateObj = new Date()
    dateObj.setDate(dateObj.getDate() + 1);
    var weekday_2 = dateObj.toLocaleString("default", { weekday: "long" })
    dateObj.setDate(dateObj.getDate() + 2);
    var weekday_3 = dateObj.toLocaleString("default", { weekday: "long" })
    dateObj.setDate(dateObj.getDate() + 3);
    var weekday_4 = dateObj.toLocaleString("default", { weekday: "long" })
    dateObj.setDate(dateObj.getDate() + 4);
    var weekday_5 = dateObj.toLocaleString("default", { weekday: "long" })
    dateObj.setDate(dateObj.getDate() + 5);
    var weekday_6 = dateObj.toLocaleString("default", { weekday: "long" })
    dateObj.setDate(dateObj.getDate() + 6);
    var weekday_7 = dateObj.toLocaleString("default", { weekday: "long" })
    localStorage.getItem('Weather')
    const weatherObject = JSON.parse(localStorage.getItem('Weather'));
    return (<div>
        <h1>Second Page</h1>
        <p>This is the second page.</p>
        <div style={{float: 'left'}}>
        <button onClick={() => nav("/FirstPage")}className="firstpage3">Left</button>
        <div>
        <table id="customers">
            <tr>
                <th>Day</th>
                <th>Feelslike</th>
                <th>Temp</th>
                <th>Rain %</th>
                <th>Max</th>
                <th>Min</th>
            </tr>
            <tr>
                <td>Today</td>
                <td>{weatherObject.daily[0].weather[0].description}</td>
                <td>{weatherObject.daily[0].temp.day}</td>
                <td>{weatherObject.daily[0].pop}</td>
                <td>{weatherObject.daily[0].temp.max}</td>
                <td>{weatherObject.daily[0].temp.min}</td>
            </tr>
            <tr>
                <td>{weekday_2}</td>
                <td>{weatherObject.daily[1].weather[0].description}</td>
                <td>{weatherObject.daily[1].temp.day}</td>
                <td>{weatherObject.daily[1].pop}</td>
                <td>{weatherObject.daily[1].temp.max}</td>
                <td>{weatherObject.daily[1].temp.min}</td>
            </tr>
            <tr>
                <td>{weekday_3}</td>
                <td>{weatherObject.daily[2].weather[0].description}</td>
                <td>{weatherObject.daily[2].temp.day}</td>
                <td>{weatherObject.daily[2].pop}</td>
                <td>{weatherObject.daily[2].temp.max}</td>
                <td>{weatherObject.daily[2].temp.min}</td>
            </tr>
            <tr>
                <td>{weekday_4}</td>
                <td>{weatherObject.daily[3].weather[0].description}</td>
                <td>{weatherObject.daily[3].temp.day}</td>
                <td>{weatherObject.daily[3].pop}</td>
                <td>{weatherObject.daily[3].temp.max}</td>
                <td>{weatherObject.daily[3].temp.min}</td>
            </tr>
            <tr>
                <td>{weekday_5}</td>
                <td>{weatherObject.daily[4].weather[0].description}</td>
                <td>{weatherObject.daily[4].temp.day}</td>
                <td>{weatherObject.daily[4].pop}</td>
                <td>{weatherObject.daily[4].temp.max}</td>
                <td>{weatherObject.daily[4].temp.min}</td>
            </tr>
            <tr>
                <td>{weekday_6}</td>
                <td>{weatherObject.daily[5].weather[0].description}</td>
                <td>{weatherObject.daily[5].temp.day}</td>
                <td>{weatherObject.daily[5].pop}</td>
                <td>{weatherObject.daily[5].temp.max}</td>
                <td>{weatherObject.daily[5].temp.min}</td>
            </tr>
            <tr>
                <td>{weekday_7}</td>
                <td>{weatherObject.daily[6].weather[0].description}</td>
                <td>{weatherObject.daily[6].temp.day}</td>
                <td>{weatherObject.daily[6].pop}</td>
                <td>{weatherObject.daily[6].temp.max}</td>
                <td>{weatherObject.daily[6].temp.min}</td>
            </tr>
            </table>
        </div>
        </div>
        <img src={dot} className="dot" />
        </div>
        
    )
    }
export default SecondPage;