import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './discount.css';

export default class Discount extends React.Component {
  state = {

  }
  render() {
    return (
      <div>
        <p className="discount"><Link to="/">我是discount页,点我会跳到首页</Link></p>
      </div>
    )
  }

  handleItemClick() {

  }
}