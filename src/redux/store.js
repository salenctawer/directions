import { combineReducers, createStore } from "redux"
import mainPageReducer from './mainPageReducer'


let rootReducer = combineReducers({
    mainPage: mainPageReducer
})


let store = createStore(rootReducer)

window.store = store

export default store