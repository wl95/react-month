import React, { Component } from 'react'
import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import '../starte.css'

class componentNav extends Component {
  componentDidMount() {
  }
  render() {
    let {routerState} = this.props;
    return (
        <ul className="starteNav">
            <li className="starteactive">点餐</li>
            <li>评价</li>
            <li>商家</li>
        </ul>
    )
  }
  componentWillMount() {
    
  }
}

export default componentNav;