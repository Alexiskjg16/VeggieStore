import React, { Component } from 'react';
import VegNav from './VegNav';
import './App.css';
import veggies from './Data/vegetables.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './Components/AllVeggies';
import Carrots from './Components/carrots';
import Potatoes from './Components/potatoes'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
         <VegNav className="veggielist"/>
         <h1> EAT YOUR VEGETABLES </h1>
         <Switch>
           <Route path="/" exact component={Categories} />
           <Route path="/potatoes" exact component={Potatoes} />
           <Route path="/carrots" exact component={Carrots} />
         </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
