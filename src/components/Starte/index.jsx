import React, { Component } from 'react'
import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import shopData from '../../mock/shop'
import './starte.css'
import StarteNav from './Nav'
import SectionLeft from './SectionLeft'
import SectionRight from './SectionRight'  // 不好用的组件

import Footer from './Footer'
import ShopCar from './Shopcar'
import { connect } from 'react-redux'; 
import { SHOPS ,BUYCAR ,SUMPRICET,SUMT } from '../../store/actions.js'
class componentStarte extends Component {
  constructor() {
    super();
    this.state = {
      onOff: false,
      shopData
    }
    this.shopCar = this.shopCar.bind(this);
    this.addR = this.addR.bind(this)
  }
  shopCar() {
    this.setState({
      onOff:!this.state.onOff
    })
  }
  addR(shopId, addr) {
    shopData.forEach(values => {
        if (values.id == shopId) {
            if (addr == '+') {
              values.val < 10 ? ++values.val : 10
            } else {
              console.log(1)
              values.val > 0 ? --values.val : 0
            }
        }
    })
    this.setState({
        shopData
    })
    this.props.shopCar(shopData);
    this.props.shopBuy(shopData);
  }  
  render() {
    //console.log(this.state.shopData)
    return (
        <div className="Wrap">
          <StarteNav />
          <div className="section">
            <SectionLeft />  
            <div className="sectionRight">
              <div className="shopFood">
                  <a name="hot">热销</a>
                  {
                      shopData.map(item => {
                          return (<dl className="foods" key={item.id}>
                              <dt><img src="./img1.jsp" /></dt>
                              <dd>
                                  <h5>{item.name}</h5>
                                  <div className="shops">
                                      <span className="price">{item.price}元</span>
                                      <div className="addR">
                                          {item.val > 0 ? <span onClick={() => this.addR(item.id,'-')}>-</span>: ''} 
                                          {item.val > 0 ? <span>{item.val}</span> : ''}
                                          <span  onClick={() =>  this.addR(item.id,'+')}>+</span>
                                      </div>
                                  </div>
                              </dd>
                          </dl>)
                      })
                  }
              </div>   
          </div>
         </div>
          <Footer shopCar={this.shopCar}/>
          <ShopCar addR={this.addR} shopCars={this.shopCar} myCar={this.state.onOff}/>
        </div>      
    )
  }
  componentDidMount() {
    this.props.shopCar(shopData);
  }
}



function mapDispatchToProps(dispatch) {
  return {
    shopCar(shopData) {
        dispatch({
            type:SHOPS,
            shopData
        })
    },
    shopBuy(shopData) {
      let buyArr = [];
      let Sum = 0;
      let SumPrice = 0;
      // 计算总价
      shopData.forEach(value => {
          if (value.val > 0) {
            buyArr.push(value)
            Sum += value.val
            SumPrice += value.price * value.val
          }
      })
      dispatch({
          type:BUYCAR,
          buyArr,
      })

      dispatch({
          type:SUMT,
          Sum
      })

      dispatch({
          type:SUMPRICET,
          SumPrice
      })
      
    }
  }
}

export default connect(null,mapDispatchToProps)(componentStarte);
