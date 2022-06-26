import itemsBus from "../data/bus"

const GET_ITEMS = 'GET_ITEMS'

let initialState ={
    items:[
        
    ]
}

const busReducer = ( state = initialState, action ) =>{
    switch(action.type){
        case GET_ITEMS:{
            return{
                ...state,
                items: action.items
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