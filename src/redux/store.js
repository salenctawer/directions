import { combineReducers, createStore } from "redux"
import bookmarksReducer from "./bookmarksReducer"
import mainPageReducer from './mainPageReducer'

let rootReducer = combineReducers({
    mainPage: mainPageReducer,
    bookMarks: bookmarksReducer
})


let store = createStore(rootReducer)

window.store = store

export default store