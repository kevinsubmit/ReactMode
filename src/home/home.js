import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './home.css';
import { Login } from '../api/index'


export default class Home extends React.Component {
  state = {

  }
  render() {
    return (
      <div>
        <p className="home"><Link to="/game">我是home页,点我会跳到game页</Link></p>
        <div onClick={this.LOGIN}>登录</div>
      </div>
    )
  }

  LOGIN(){
    Login("{username:'hugo111'}").then(data=>{
      console.log(data)
    })
  }

  handleItemClick() {

  }
}