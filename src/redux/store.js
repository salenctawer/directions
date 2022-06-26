import { applyMiddleware, combineReducers, createStore } from "redux"
import bookmarksReducer from "./bookmarksReducer"
import busReducer from "./busReducer"
import mainPageReducer from './mainPageReducer'
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    mainPage: mainPageReducer,
    bookMarks: bookmarksReducer,
    bus: busReducer
})


let store = createStore(rootReducer,  applyMiddleware(thunkMiddleware))

window.store = store

export default store