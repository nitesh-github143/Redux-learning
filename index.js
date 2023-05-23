import { applyMiddleware, createStore } from "redux"
import { } from "redux"
import logger from "redux-logger";

//action name constant
const inc = 'increment'
const dec = 'decrement'
const incByAmt = 'incrementByAmount'

const store = createStore(reducer, applyMiddleware(logger.default));

const history = []

function reducer(state = { amount: 1 }, action) {
    if (action.type === "increment") {
        return { amount: state.amount + 1 }
    }
    if (action.type === "decrement") {
        return { amount: state.amount - 1 }
    }
    if (action.type === "incrementByAmount") {
        return { amount: state.amount + action.payload }
    }
    return state
}

//global state
store.subscribe(() => {
    history.push(store.getState())
    console.log(history)
})

// action creator
function increment() {
    return { type: inc }
}
function decrement() {
    return { type: dec }
}
function incrementByAmount(value) {
    return { type: incByAmt, payload: value }
}
setInterval(() => {
    store.dispatch(incrementByAmount(20))
}, 2000)
