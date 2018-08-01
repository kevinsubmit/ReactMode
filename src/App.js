import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './home/home'
import Game from './game/game'
import Discount from './discount/discount'
import Header from './components/header'


const BasicExample = () => (
  <Router>
    <div>
      <Header/>
      <Route exact path="/" component={Home} />
      <Route path="/game" component={Game} />
      <Route path="/discount" component={Discount} />
    </div>
  </Router>
);
export default BasicExample;