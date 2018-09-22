import React                from 'react';
import { Switch, Route }    from 'react-router-dom'

import WeatherApp  from '../weatherApp/weatherApp'
import CalculaterApp from '../calculater/calculaterApp'


const Main = () =>(
  <Switch>
    <Route path="/weatherapp" component   ={WeatherApp} />
    <Route path="/calculator" component   ={CalculaterApp} />
  </Switch>
)

export default Main;