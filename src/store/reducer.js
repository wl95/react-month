import { combineReducers } from 'redux'
import { SHOPS ,BUYCAR , SUMPRICET , SUMT} from './actions'

export const shopCar = (state = [], action) => {
    switch (action.type) {
        case SHOPS:
            return action.shopData
        default:
            return state
    }
}

export const buyArr = (state = [], action) => {
    switch (action.type) {
        case BUYCAR:
            return action.buyArr
        default:
            return state
    }
}
export const Sums = (state = [], action) => {
    switch (action.type) {
        case SUMT:
            return action.Sum
        default:
            return state
    }
}
export const SumPrices = (state = [], action) => {
    switch (action.type) {
        case SUMPRICET:
            return action.SumPrice
        default:
            return state
    }
}


export default combineReducers({
    shopCar,
    buyArr,
    Sums,
    SumPrices
})