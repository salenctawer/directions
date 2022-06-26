import { combineReducers, createStore } from "redux"
import bookmarksReducer from "./bookmarksReducer"
import busReducer from "./busReducer"
import mainPageReducer from './mainPageReducer'

let rootReducer = combineReducers({
    mainPage: mainPageReducer,
    bookMarks: bookmarksReducer,
    bus: busReducer
})


let store = createStore(rootReducer)

window.store = store

export default store