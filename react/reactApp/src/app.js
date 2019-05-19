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
        <nav className="mainNav">
          <ul>
            <li>
              <a href="https://net-designer.com">Home</a>
            </li>
            <li>
              <Link to="/react/weatherapp">Weather App</Link>
            </li>
            <li>
              <Link to="/react/calculator">Calculator</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Route path="/react/weatherapp" component={weatherAppRoute} />
        <Route path="/react/calculator" component={calculatorAppRoute} />
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