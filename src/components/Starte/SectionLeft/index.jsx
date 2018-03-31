import React, { Component } from 'react'
import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import '../starte.css'

class SectionLeft extends Component {
  componentDidMount() {
  }
  render() {
    let {routerState} = this.props;
    return (
        <div className="sectionLeft">
            <a className="sectionLeft_line" href="#hot">热销</a>
            <a className="sectionLeft_line" href="#tao">套餐</a>
            <a className="sectionLeft_line" href="#bing">烧饼类</a>
            <a className="sectionLeft_line" href="#liang">凉菜类</a>
            <a className="sectionLeft_line" href="#tang">汤类</a>
            <a className="sectionLeft_line" href="#yin">饮料类</a>
            <a className="sectionLeft_line" href="#shao">烧烤</a>
        </div>
    )
  }
  componentWillMount() {
    
  }
}

export default SectionLeft;