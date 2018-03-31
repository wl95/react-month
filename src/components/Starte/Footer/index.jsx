import React, { Component } from 'react'
import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux'; 
import '../starte.css'

class Footer extends Component {
  constructor () {
      super();
  }
    shopCar = () => {
        this.props.myCar();
    }  
    render() {
        let { Sum, SumPrices } = this.props;
        return (
            <div className="footer">
                <div>
                    <i className="iconfont" onClick={this.props.shopCar}>&#xe698;</i>    
                    <span>总价{SumPrices > 0 ? SumPrices : "0"}</span>
                </div>
                <button>总数量({Sum > 0 ? Sum : "0"})</button>
            </div>
        )
    }
    componentWillMount() {
        
    }
}


function mapStateToProps(state) {
    return {
        Sum: state.Sums,
        SumPrices: state.SumPrices
    }
}

export default connect(mapStateToProps)(Footer);
