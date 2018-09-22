import React from "react";
import Titles from "./components/titles";
import Form from "./components/form";
import Weather from "./components/weather";
import Footer from "./components/footer"

const API_key   = "70617e8c4d7caa619ded2b6875f4753a"
// const url       = "http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b6907d289e10d714a6e88b30761fae22"

class WeatherApp extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      temperature   : undefined,
      city          : undefined,
      country       : undefined,
      humidity      : undefined,
      description   : undefined,
      error         : undefined
    }
  }
  getWeather = async (e) =>{
    try {
      e.preventDefault();
      const city = e.target.elements.city.value;
      // const country = e.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&appid=${API_key}&units=metric`)
      const data = await api_call.json();
      console.log(data)
          console.log(data)
          this.setState({
            temperature   : data.main.temp,
            city          : data.name,
            country       : data.sys.country,
            humidity      : data.main.humidity,
            description   : data.weather[0].description
          })   
    } catch (error) {
      this.setState({
        error         : " City Not Found"
        
      })
    }

    }
  render(){
      return(
        <div>
          <div className ="header">
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/">FindYourWeather.org</a>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active"><a href="/">HOME</a></li>
                  <li><a href="/">BREAKING NEWS</a></li>
                </ul>
                <form className="navbar-form navbar-right" onSubmit={this.getWeather}>
                <Form getWeather={this.getWeather}/>
                </form>
              </div>
            </nav>
            <img src="./media/headerimage.jpeg" alt="header img"></img>
          </div>
          <div className="wrapper">
            <div className="main">

                <div className="title">
                  <Titles />
                </div>
                  <div className="search-site-main">
                    <form className="search-site" onSubmit={this.getWeather}>
                      <Form getWeather={this.getWeather}/>
                    <Weather
                      temperature = {this.state.temperature}
                      city        = {this.state.city}
                      country     = {this.state.country}
                      humidity    = {this.state.humidity}
                      description = {this.state.description}
                      error       = {this.state.error}
                    />
                    </form>
                  </div>

            </div>
          </div>
          <Footer />
        </div>
    )
  }
}
export default WeatherApp;  