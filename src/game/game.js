import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './game.css';

export default class Game extends React.Component {
  state = {

  }
  render() {
    return (
        <div>
        <p className="game"><Link to="/discount">我是game页,点我会跳到discount页</Link></p>
        </div>
    )
  }

  handleItemClick() {

  }
}