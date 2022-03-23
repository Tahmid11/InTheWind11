import React from "react"
import {useNavigate} from "react-router-dom";
import dot from './assets/page2.png';
import rain from './assets/raindrop.png';

function SecondPage(){
    const weatherObject = JSON.parse(localStorage.getItem('Weather'));
    const nav=useNavigate();
    var dateObj = new Date()
    let hour_1 = dateObj.getHours();
    let hour_2 = dateObj.getHours()+1;
    let hour_3 = dateObj.getHours()+2;
    let hour_4 = dateObj.getHours()+3;
    let hour_5 = dateObj.getHours()+4;
    var h_icon_1=`http://openweathermap.org/img/wn/${weatherObject.hourly[0].weather[0].icon}.png`
    var h_icon_2=`http://openweathermap.org/img/wn/${weatherObject.hourly[1].weather[0].icon}.png`
    var h_icon_3=`http://openweathermap.org/img/wn/${weatherObject.hourly[2].weather[0].icon}.png`
    var h_icon_4=`http://openweathermap.org/img/wn/${weatherObject.hourly[3].weather[0].icon}.png`
    var h_icon_5=`http://openweathermap.org/img/wn/${weatherObject.hourly[4].weather[0].icon}.png`
    dateObj.setDate(dateObj.getDate() + 2);
    var weekday_2 = dateObj.toLocaleString("default", { weekday: "long" })
    dateObj.setDate(dateObj.getDate() + 3);
    var weekday_3 = dateObj.toLocaleString("default", { weekday: "long" })
    dateObj.setDate(dateObj.getDate() + 3);
    var weekday_4 = dateObj.toLocaleString("default", { weekday: "long" })
    dateObj.setDate(dateObj.getDate() + 4);
    var weekday_5 = dateObj.toLocaleString("default", { weekday: "long" })
    dateObj.setDate(dateObj.getDate() + 5);
    var weekday_6 = dateObj.toLocaleString("default", { weekday: "long" })
    dateObj.setDate(dateObj.getDate() + 6);
    var weekday_7 = dateObj.toLocaleString("default", { weekday: "long" })
    var icon_1=`http://openweathermap.org/img/wn/${weatherObject.daily[0].weather[0].icon}.png`
    var icon_2=`http://openweathermap.org/img/wn/${weatherObject.daily[1].weather[0].icon}.png`
    var icon_3=`http://openweathermap.org/img/wn/${weatherObject.daily[2].weather[0].icon}.png`
    var icon_4=`http://openweathermap.org/img/wn/${weatherObject.daily[3].weather[0].icon}.png`
    var icon_5=`http://openweathermap.org/img/wn/${weatherObject.daily[4].weather[0].icon}.png`
    var icon_6=`http://openweathermap.org/img/wn/${weatherObject.daily[5].weather[0].icon}.png`
    var icon_7=`http://openweathermap.org/img/wn/${weatherObject.daily[6].weather[0].icon}.png`

    localStorage.getItem('Weather')
    return (<div>
        <div>
            <button onClick={() => nav("/FirstPage")}className="firstpage3">Left</button>
        </div>
        <table>
            <tr>
                <th>{hour_1}</th>
                <th>{hour_2}</th>
                <th>{hour_3}</th>
                <th>{hour_4}</th>
                <th>{hour_5}</th>
            </tr>
            <tr>
                <td>
                    <img className="icon" src={h_icon_1}></img>
                </td>
            </tr>
            <tr>
                <td>{weatherObject.hourly[0].temp}</td>
            </tr>
            <tr>
                <td>
                    <img src={rain}/>
                    <br></br>
                    {weatherObject.hourly[0].pop*100}%
                </td>
            </tr>
        </table>
        <div style={{float: 'left'}}>
        <div>
        <table id="week">
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
                    <td>
                        <img className="icon" src={icon_1}></img>
                    </td>
                    <td>{weatherObject.daily[0].temp.day}</td>
                    <td>{weatherObject.daily[0].pop}</td>
                    <td>{weatherObject.daily[0].temp.max}</td>
                    <td>{weatherObject.daily[0].temp.min}</td>
                </tr>
                <tr>
                    <td>{weekday_2}</td>
                    <td>
                        <img className="icon" src={icon_2}></img>
                    </td>
                    <td>{weatherObject.daily[1].temp.day}</td>
                    <td>{weatherObject.daily[1].pop}</td>
                    <td>{weatherObject.daily[1].temp.max}</td>
                    <td>{weatherObject.daily[1].temp.min}</td>
                </tr>
                <tr>
                    <td>{weekday_3}</td>
                    <td>
                        <img className="icon" src={icon_3}></img>
                    </td>
                    <td>{weatherObject.daily[2].temp.day}</td>
                    <td>{weatherObject.daily[2].pop}</td>
                    <td>{weatherObject.daily[2].temp.max}</td>
                    <td>{weatherObject.daily[2].temp.min}</td>
                </tr>
                <tr>
                    <td>{weekday_4}</td>
                    <td>
                        <img className="icon" src={icon_4}></img>
                    </td>
                    <td>{weatherObject.daily[3].temp.day}</td>
                    <td>{weatherObject.daily[3].pop}</td>
                    <td>{weatherObject.daily[3].temp.max}</td>
                    <td>{weatherObject.daily[3].temp.min}</td>
                </tr>
                <tr>
                    <td>{weekday_5}</td>
                    <td>
                        <img className="icon" src={icon_5}></img>
                    </td>
                    <td>{weatherObject.daily[4].temp.day}</td>
                    <td>{weatherObject.daily[4].pop}</td>
                    <td>{weatherObject.daily[4].temp.max}</td>
                    <td>{weatherObject.daily[4].temp.min}</td>
                </tr>
                <tr>
                    <td>{weekday_6}</td>
                    <td>
                        <img className="icon" src={icon_6}></img>
                    </td>
                    <td>{weatherObject.daily[5].temp.day}</td>
                    <td>{weatherObject.daily[5].pop}</td>
                    <td>{weatherObject.daily[5].temp.max}</td>
                    <td>{weatherObject.daily[5].temp.min}</td>
                </tr>
                <tr>
                    <td>{weekday_7}</td>
                    <td>
                        <img className="icon" src={icon_7}></img>
                    </td>
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