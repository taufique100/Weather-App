import React,{useEffect, useState} from "react";
import './WeatherStyle.css';
import axios from "axios";
import windIcon from './Images/wind.png'
import thermoIcon from './Images/thermometer.png'
import meter from './Images/meter.png'
import water from './Images/water.png'



function Weather() {
    const [country, setCountry] = useState('IN')
    const [state, setState] = useState('Narkatiaganj')
    const [weather, setWeather] = useState('')
    const [forecastData, setForecastData] = useState([]);

    const apiKey = '381c87a95dd9d14669ceb71ea207148a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${state},${country}&appid=${apiKey}&units=metric`
    
    const getWeather = async(e)=>{
       axios.get(url)
       .then((res)=>{
        console.log(res)
        setWeather({
            temp: res.data.main.temp,
            description: res.data.weather[0].description,
            city: res.data.name,
            humidity: res.data.main.humidity,
            pressure: res.data.main.pressure,
            temp_max: res.data.main.temp_max,
            tep_min: res.data.main.tep_min,
            country:res.data.sys.country,
            windSpeed: res.data.wind.speed,
            icon:res.data.weather[0].icon,
            feel_Like: res.data.main.feels_like,
        })
        // console.log("-----"+ weather.feel_Like)
       })
       .catch((err)=>{
        console.log(err)
       })

       axios.get(forecastUrl)
        .then((res)=>{
            console.log(res)
            setForecastData(res.data.list)
            console.log(forecastData);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    let iconurl = `http://openweathermap.org/img/w/${weather.icon}.png`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${state},${country}&cnt=5&appid=${apiKey}&units=metric`

    useEffect(()=>{
        getWeather();
    },[])

  return (

    <main>
        <div className="container">
            <div className="top">
                    <input type="text" value={country} onChange={e=>setCountry(e.target.value)} name="county" id="search-city" placeholder="County code" style={{width:'200px', height:'45px',borderRadius:'10px'}} />
                    <input type="text" value={state} onChange={e=>setState(e.target.value)}  name="city" id="search-city" placeholder="Search City..." />
                    <button  onClick={getWeather} className="btn">Search</button>
            </div>
            
            <div className="buttom" id="buttom-section">
                <div className="left-box">
                    <div className="weather-section-1 " id="wether-content">
                        <div className="weather-Forcast">
                            <div className="content">
                                <h2>{weather.city},{weather.country}</h2>
                                <p>Humidity - {weather.humidity}%</p>
                            </div>
                            <div className="content">
                                <h2>{weather.temp} °C</h2>
                            </div>
                        </div>
                        <div className="logo" id="logo-image">
                            <img src={iconurl} alt="sunLogo" />
                            <p>{weather.description}</p>
                        </div>
                    </div>
                    <div className="weather-section-1 section-2">
                        {
                            forecastData.map((items,index)=>{
                                return(
                                    <div className="today-forcast" key={index} >
                                    <p>{items.dt_txt}</p>
                                    <img src={`http://openweathermap.org/img/w/${items.weather[0].icon}.png`} alt="logo" />
                                    <h4> {items.main.temp} °C</h4>
                                </div>
                                )
                            })
                        }     
                        
                    </div>
                    <div className="weather-section-1 section-3">
                        <div className="wind-quality">
                            <div className="wind">
                                <p><img className="icon-feels" src={thermoIcon} alt="feelsIcon"/> Real Feel</p>
                                <h3>{weather.feel_Like} °C</h3>
                            </div>
                            <div className="wind">
                                <p> <img className="icon-feels" src={water} alt="humidity" /> Humidity</p>
                                <h3>{weather.humidity}%</h3>
                            </div>
                        </div>
                        <div className="wind-quality">
                            <div className="wind-speed">
                                <p> <img className="icon-feels" src={windIcon} alt="wind-icon" /> Wind Speed</p>
                                <h3>{weather.windSpeed} Km/h</h3>
                            </div>
                            <div className="wind-speed">
                                <p><img className="icon-feels" src={meter} alt="pressure" /> Pressure</p>
                                <h4>{weather.pressure} hpa</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="right-box">
                    <p>7 - Days Forecast</p>
                    <div className="week">
                        <div className="day" id="week-box">Today</div>
                        <div className="sunLight" id="week-box">Sunney</div>
                        <div className="temp" id="week-box">31/25</div>
                    </div>
                    <div className="week">
                        <div className="day" id="week-box">Today</div>
                        <div className="sunLight" id="week-box">Sunney</div>
                        <div className="temp" id="week-box">31/25</div>
                    </div>
                    <div className="week">
                        <div className="day" id="week-box">Today</div>
                        <div className="sunLight" id="week-box">Sunney</div>
                        <div className="temp" id="week-box">31/25</div>
                    </div>
                    <div className="week">
                        <div className="day" id="week-box">Today</div>
                        <div className="sunLight" id="week-box">Sunney</div>
                        <div className="temp" id="week-box">31/25</div>
                    </div>
                    <div className="week">
                        <div className="day" id="week-box">Today</div>
                        <div className="sunLight" id="week-box">Sunney</div>
                        <div className="temp" id="week-box">31/25</div>
                    </div>
                    <div className="week">
                        <div className="day" id="week-box">Today</div>
                        <div className="sunLight" id="week-box">Sunney</div>
                        <div className="temp" id="week-box">31/25</div>
                    </div>
                    <div className="week">
                        <div className="day" id="week-box">Today</div>
                        <div className="sunLight" id="week-box">Sunney</div>
                        <div className="temp" id="week-box">31/25</div>
                    </div>
                </div> */}
            </div>
        </div>
    </main>
  );
}

export default Weather;
