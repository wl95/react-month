import React, { Component } from 'react'
import { connect } from 'react-redux'; 


import '../starte.css'

class shopCar extends Component {
    componentDidMount() {
      
    }
    render() {
        const { buyArr } = this.props;
        return (
            <div className={this.props.myCar ? "shopcar tran0" : "shopcar"} onClick={this.props.shopCars}>   
                <div className={this.props.myCar ? "cars tran0" : "cars"} onClick={(e) => e.stopPropagation()}>
                    <h4>已选商品</h4>
                    {
                        buyArr.map((item, index) => {
                            return <div className="carsLine" key={item.id}>
                                <span>{item.name}</span>
                                <div className="carsRight">
                                    <span>￥{item.price}</span>
                                    <div className="addR">
                                        <span onClick={() => this.props.addR(item.id, '-')}>-</span>
                                        <span>{item.val}</span>
                                        <span onClick={() => this.props.addR(item.id, '+')}>+</span>
                                    </div>    
                                </div>
                            </div>
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        buyArr: state.buyArr
    }
}

export default connect(mapStateToProps)(shopCar);
