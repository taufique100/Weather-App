import React,{useState} from "react";
import './WeatherStyle.css';
import sunLogo from './Images/sun.png'
import axios from "axios";


function Weather() {
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [weather, setWeather] = useState('')
    const [city, setCity] = useState('');
    const apiKey = '381c87a95dd9d14669ceb71ea207148a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=bihar,IN&appid=${apiKey}&units=metric`
    const getWeather= async(e)=>{
       axios.get(url)
       .then((response)=>{
        console.log(response)
       })
       .catch((err)=>{
        console.log(err)
       })
    }

  return (

    <main>
        <div className="container">
            <div className="top">
                    <input type="text" value={country} onChange={e=>setCountry(e.target.value)} name="county" placeholder="County code" style={{width:'200px', height:'50px',borderRadius:'10px'}} />
                    <input type="text" value={state} onChange={e=>setState(e.target.value)}  name="city" id="search-city" placeholder="Search City..." />
                    <button  onClick={getWeather} className="btn">Search</button>
            </div>
            <div className="buttom" id="buttom-section">
                <div className="left-box">
                    <div className="weather-section-1 " id="wether-content">
                        <div className="weather-Forcast">
                            <div className="content">
                                <h2>Madrid</h2>
                                <p>Rain Chance - 0%</p>
                            </div>
                            <div className="content">
                                <h2>30 C</h2>
                            </div>
                        </div>
                        <div className="logo">
                            <img src={sunLogo} alt="sunLogo" />
                        </div>
                    </div>
                    <div className="weather-section-1 section-2">
                        <div className="today-forcast">
                            <p>Time 9:30</p>
                            <img src="#" alt="logo" />
                            <h4>Temp - 40</h4>
                        </div>
                        <div className="today-forcast">
                            <p>Time 9:30</p>
                            <img src="#" alt="logo" />
                            <h4>Temp - 40</h4>
                        </div>
                        <div className="today-forcast">
                            <p>Time 9:30</p>
                            <img src="#" alt="logo" />
                            <h4>Temp - 40</h4>
                        </div>
                        <div className="today-forcast">
                            <p>Time 9:30</p>
                            <img src="#" alt="logo" />
                            <h4>Temp - 40</h4>
                        </div>
                        <div className="today-forcast">
                            <p>Time 9:30</p>
                            <img src="#" alt="logo" />
                            <h4>Temp - 40</h4>
                        </div>
                        <div className="today-forcast">
                            <p>Time 9:30</p>
                            <img src="#" alt="logo" />
                            <h4>Temp - 40</h4>
                        </div>
                    </div>
                    <div className="weather-section-1 section-3">
                        <div className="wind-quality">
                            <div className="wind">
                                <p><span>logo</span> Real Feel</p>
                                <h3>30 C</h3>
                            </div>
                            <div className="wind">
                                <p> <span>Logo</span> Chance of rain</p>
                                <h3>30 C</h3>
                            </div>
                        </div>
                        <div className="wind-quality">
                            <div className="wind-speed">
                                <p><span>Logo</span> Wind</p>
                                <h3>32km/hr</h3>
                            </div>
                            <div className="wind-speed">
                                <p><span>Logo</span> UV index</p>
                                <h4>3</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-box">
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
                </div>
            </div>
        </div>
    </main>
  );
}

export default Weather;
