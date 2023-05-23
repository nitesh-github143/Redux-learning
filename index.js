import { applyMiddleware, createStore } from "redux"
import { } from "redux"
import logger from "redux-logger";

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
setInterval(() => {
    store.dispatch({ type: "incrementByAmount", payload: 4 })
}, 2000)
