import React, { Component } from 'react'
import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import '../starte.css'
import { connect } from 'react-redux'; 
import { SHOPS, BUYCAR } from '../../../store/actions.js'

class SectionRight extends Component {
    constructor() {
        super()
    }
    render() {
        // 这个组件没用 
        const { shopData } = this.props;
        console.log(shopData)
        return (
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
                                            {item.val > 0 ? <span onClick={() => this.props.addR(item.id,'-')}>-</span>: ''} 
                                            {item.val > 0 ? <span>{item.val}</span> : ''}
                                            <span  onClick={() =>  this.props.addR(item.id,'+')}>+</span>
                                        </div>
                                    </div>
                                </dd>
                            </dl>)
                        })
                    }
                 </div>   
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        shopData:state.shopCar
    }
}

export default connect(mapStateToProps)(SectionRight);