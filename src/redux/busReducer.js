import itemsBus from "../data/bus"

const GET_ITEMS = 'GET_ITEMS'

const CHANGE_BUS_URL = 'CHANGE_BUS_URL'

let initialState ={
    items:[
        
    ],
    busURL:null,
    currentBusRoute: null
}

const busReducer = ( state = initialState, action ) =>{
    switch(action.type){
        case GET_ITEMS:{
            return{
                ...state,
                items: action.items
            }
        }
        case CHANGE_BUS_URL:{
            let obj = state.items.find(item => item.id === action.id)
            return{
                ...state,
                busURL: action.id,
                currentBusRoute: obj
            }
        }
        default:{
            return state
        }
    }
}

export const getItems = (items) =>{
    return{
        type: GET_ITEMS,
        items: items
    }
}

export const changeBusUrl = (id) =>{
    return{
        type: CHANGE_BUS_URL,
        id: id
    }
}


export const getItemsThunk = () =>{
    return(dispatch) =>{
        let promise = new Promise(resolve =>{
            resolve('Данные успешно получены')
        })
        promise.then(value=>{
            setTimeout(()=>{
                dispatch(getItems(itemsBus))
            }, 1000)
        })
    }
}

export default busReducer