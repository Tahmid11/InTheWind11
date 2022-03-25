import React from "react"
import {useNavigate} from "react-router-dom";
import rain from './assets/raindrop.png';
import wind from './assets/wind.png';
// This page displays weather information by hourly and a weekly report.

function SecondPage(){
    // Getting the local object and storing it into a variable.
    const weatherObject = JSON.parse(localStorage.getItem('Weather'));
    const nav=useNavigate();
    var dateObj = new Date()
    var date_s_r = new Date(weatherObject.current.sunrise * 1000);
    const t_sunrise = date_s_r.getHours() + ':' + randomS(date_s_r.getMinutes());
    
    var date_s_s = new Date(weatherObject.current.sunset * 1000);
    const t_sunset = date_s_s.getHours() + ':' + randomS(date_s_s.getMinutes());
    var hour_1 = new Date(weatherObject.hourly[0].dt * 1000);
    hour_1=hour_1.getHours();
    var hour_2 = new Date(weatherObject.hourly[1].dt * 1000);
    hour_2=hour_2.getHours();
    var hour_3 = new Date(weatherObject.hourly[2].dt * 1000);
    hour_3=hour_3.getHours();
    var hour_4 = new Date(weatherObject.hourly[3].dt * 1000);
    hour_4=hour_4.getHours();
    var hour_5 = new Date(weatherObject.hourly[4].dt * 1000);
    hour_5=hour_5.getHours();

    // An image describing the weather is used from the API and stored into a variable.
    var h_icon_1=`http://openweathermap.org/img/wn/${weatherObject.hourly[0].weather[0].icon}.png`
    var h_icon_2=`http://openweathermap.org/img/wn/${weatherObject.hourly[1].weather[0].icon}.png`
    var h_icon_3=`http://openweathermap.org/img/wn/${weatherObject.hourly[2].weather[0].icon}.png`
    var h_icon_4=`http://openweathermap.org/img/wn/${weatherObject.hourly[3].weather[0].icon}.png`
    var h_icon_5=`http://openweathermap.org/img/wn/${weatherObject.hourly[4].weather[0].icon}.png`

    // Setting the dates.
    dateObj.setDate(dateObj.getDate() + 1);
    var weekday_2 = dateObj.toLocaleString("default", { weekday: "long" })
    dateObj.setDate(dateObj.getDate() + 1);
    var weekday_3 = dateObj.toLocaleString("default", { weekday: "long" })
    dateObj.setDate(dateObj.getDate() + 1);
    var weekday_4 = dateObj.toLocaleString("default", { weekday: "long" })
    dateObj.setDate(dateObj.getDate() + 1);
    var weekday_5 = dateObj.toLocaleString("default", { weekday: "long" })
    dateObj.setDate(dateObj.getDate() + 1);
    var weekday_6 = dateObj.toLocaleString("default", { weekday: "long" })
    dateObj.setDate(dateObj.getDate() + 1);
    var weekday_7 = dateObj.toLocaleString("default", { weekday: "long" })

    // An image describing the weather is used from the API and stored into a variable.
    var icon_1=`http://openweathermap.org/img/wn/${weatherObject.daily[0].weather[0].icon}.png`
    var icon_2=`http://openweathermap.org/img/wn/${weatherObject.daily[1].weather[0].icon}.png`
    var icon_3=`http://openweathermap.org/img/wn/${weatherObject.daily[2].weather[0].icon}.png`
    var icon_4=`http://openweathermap.org/img/wn/${weatherObject.daily[3].weather[0].icon}.png`
    var icon_5=`http://openweathermap.org/img/wn/${weatherObject.daily[4].weather[0].icon}.png`
    var icon_6=`http://openweathermap.org/img/wn/${weatherObject.daily[5].weather[0].icon}.png`
    var icon_7=`http://openweathermap.org/img/wn/${weatherObject.daily[6].weather[0].icon}.png`
    localStorage.getItem('Weather')

    return (<div>
        <div className="sunrise">
            <h3>Sunrise</h3>
            {t_sunrise}
        </div>
        <div className="sunset">
            <h3>Sunset</h3>
            {t_sunset}
        </div>
        <table id="hourly_w">
            <tr>
                <th>{hour_1}:00</th>
                <th>{hour_2}:00</th>
                <th>{hour_3}:00</th>
                <th>{hour_4}:00</th>
                <th>{hour_5}:00</th>
            </tr>
            <tr>
                <td>
                    <img className="icon" src={h_icon_1}></img>
                </td>
                <td>
                    <img className="icon" src={h_icon_2}></img>
                </td>
                <td>
                    <img className="icon" src={h_icon_3}></img>
                </td>
                <td>
                    <img className="icon" src={h_icon_4}></img>
                </td>
                <td>
                    <img className="icon" src={h_icon_5}></img>
                </td>
            </tr>
            <tr>
                <td>{Math.round(weatherObject.hourly[0].temp)}°</td>
                <td>{Math.round(weatherObject.hourly[1].temp)}°</td>
                <td>{Math.round(weatherObject.hourly[2].temp)}°</td>
                <td>{Math.round(weatherObject.hourly[3].temp)}°</td>
                <td>{Math.round(weatherObject.hourly[4].temp)}°</td>
            </tr>
            <tr>
                <td>
                    <br></br>
                    <img src={rain}/>
                    <br></br>
                    {Math.round(weatherObject.hourly[0].pop*100)}%
                </td>
                <td>
                    <br></br>
                    <img src={rain}/>
                    <br></br>
                    {Math.round(weatherObject.hourly[1].pop*100)}%
                </td>
                <td>
                    <br></br>
                    <img src={rain}/>
                    <br></br>
                    {Math.round(weatherObject.hourly[2].pop*100)}%
                </td>
                <td>
                    <br></br>
                    <img src={rain}/>
                    <br></br>
                    {Math.round(weatherObject.hourly[3].pop*100)}%
                </td>
                <td>
                    <br></br>
                    <img src={rain}/>
                    <br></br>
                    {Math.round(weatherObject.hourly[4].pop*100)}%
                </td>
            </tr>
            <tr>
                <td>
                    <br></br>
                    <img src={wind}/>
                    <br></br>
                    {weatherObject.hourly[0].wind_speed} km/h
                </td>
                <td>
                    <br></br>
                    <img src={wind}/>
                    <br></br>
                    {weatherObject.hourly[1].wind_speed} km/h
                </td>
                <td>
                    <br></br>
                    <img src={wind}/>
                    <br></br>
                    {weatherObject.hourly[2].wind_speed} km/h
                </td>
                <td>
                    <br></br>
                    <img src={wind}/>
                    <br></br>
                    {weatherObject.hourly[3].wind_speed} km/h
                </td>
                <td>
                    <br></br>
                    <img src={wind}/>
                    <br></br>
                    {weatherObject.hourly[4].wind_speed} km/h
                </td>
            </tr>
        </table>
        <div style={{float: 'left'}}>
        <div>
        <br></br>
        <table id="week">
                <tr>
                    <th>Day</th>
                    <th></th>
                    <th>Temperature</th>
                    <th>% Rain</th>
                    <th>Max</th>
                    <th>Min</th>
                </tr>
                <tr>
                    <td>Today</td>
                    <td>
                        <img className="icon" src={icon_1}></img>
                    </td>
                    <td>{Math.round(weatherObject.daily[0].temp.day)}°</td>
                    <td><img src={rain}/> {Math.round(weatherObject.daily[0].pop*100)}%</td>
                    <td>{Math.round(weatherObject.daily[0].temp.max)}°</td>
                    <td>{Math.round(weatherObject.daily[0].temp.min)}°</td>
                </tr>
                <tr>
                    <td>{weekday_2}</td>
                    <td>
                        <img className="icon" src={icon_2}></img>
                    </td>
                    <td>{Math.round(weatherObject.daily[1].temp.day)}°</td>
                    <td><img src={rain}/> {Math.round(weatherObject.daily[1].pop*100)}%</td>
                    <td>{Math.round(weatherObject.daily[1].temp.max)}°</td>
                    <td>{Math.round(weatherObject.daily[1].temp.min)}°</td>
                </tr>
                <tr>
                    <td>{weekday_3}</td>
                    <td>
                        <img className="icon" src={icon_3}></img>
                    </td>
                    <td>{Math.round(weatherObject.daily[2].temp.day)}°</td>
                    <td><img src={rain}/> {Math.round(weatherObject.daily[2].pop*100)}%</td>
                    <td>{Math.round(weatherObject.daily[2].temp.max)}°</td>
                    <td>{Math.round(weatherObject.daily[2].temp.min)}°</td>
                </tr>
                <tr>
                    <td>{weekday_4}</td>
                    <td>
                        <img className="icon" src={icon_4}></img>
                    </td>
                    <td>{Math.round(weatherObject.daily[3].temp.day)}°</td>
                    <td><img src={rain}/> {Math.round(weatherObject.daily[3].pop*100)}%</td>
                    <td>{Math.round(weatherObject.daily[3].temp.max)}°</td>
                    <td>{Math.round(weatherObject.daily[3].temp.min)}°</td>
                </tr>
                <tr>
                    <td>{weekday_5}</td>
                    <td>
                        <img className="icon" src={icon_5}></img>
                    </td>
                    <td>{Math.round(weatherObject.daily[4].temp.day)}°</td>
                    <td><img src={rain}/> {Math.round(weatherObject.daily[4].pop*100)}%</td>
                    <td>{Math.round(weatherObject.daily[4].temp.max)}°</td>
                    <td>{Math.round(weatherObject.daily[4].temp.min)}°</td>
                </tr>
                <tr>
                    <td>{weekday_6}</td>
                    <td>
                        <img className="icon" src={icon_6}></img>
                    </td>
                    <td>{Math.round(weatherObject.daily[5].temp.day)}°</td>
                    <td><img src={rain}/> {Math.round(weatherObject.daily[5].pop*100)}%</td>
                    <td>{Math.round(weatherObject.daily[5].temp.max)}°</td>
                    <td>{Math.round(weatherObject.daily[5].temp.min)}°</td>
                </tr>
                <tr>
                    <td>{weekday_7}</td>
                    <td>
                        <img className="icon" src={icon_7}></img>
                    </td>
                    <td>{Math.round(weatherObject.daily[6].temp.day)}°</td>
                    <td><img src={rain}/> {Math.round(weatherObject.daily[6].pop*100)}%</td>
                    <td>{Math.round(weatherObject.daily[6].temp.max)}°</td>
                    <td>{Math.round(weatherObject.daily[6].temp.min)}°</td>
                </tr>
        </table>
        </div>
        </div>
        <div className="button_poss">
            <button  onClick={() => nav("/ThirdPage")}className="button_going_to_p">&nbsp;&nbsp;&nbsp;</button>
            <button  onClick={() => nav("/FirstPage")}className="button_going_to_p">&nbsp;&nbsp;&nbsp;</button>
            <button  onClick={() => nav("/SecondPage")}className="button_on_p">&nbsp;&nbsp;&nbsp;</button>
        </div>
        </div>
    )
    }
export default SecondPage;

// This function resolves the issue of displaying time, more specifically the minutes correct.
// Instead of '6:7' it's '6:07'.
function randomS(number){
    if (number<10){
        number="0"+number

    }
    return number
}