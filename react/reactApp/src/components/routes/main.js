import React from "react";
import Main     from './components/routes/main'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from './components/index/index'
import WeatherApp  from './components/weatherApp/weatherApp'
import CalculatorApp from './components/calculater/calculaterApp'

class App extends React.Component{

  render(){
      return(
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/weatherapp">Weather App</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/weatherapp" component={weatherAppRoute} />
        <Route path="/calculator" component={calculatorAppRoute} />
      </div>
    </Router>
    )
  }
  
}
function Home() {
  return (
    <div>
      <Index/>
    </div>
  );
}

function weatherAppRoute() {
  return (
    <div>
      <WeatherApp/>
    </div>
  );
}
function calculatorAppRoute() {
  return (
    <div>
      <CalculatorApp/>
    </div>
  );
}

export default App;  