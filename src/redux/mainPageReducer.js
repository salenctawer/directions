const CHANGE_FLAG = 'CHANGE_FLAG'
const SET_CURRENT_ACTIVE_LOCATIONS = 'SET_CURRENT_ACTIVE_LOCATIONS'

let initialState ={
    flag: 'default',
    orders:[

    ],
    locationVariants:[

    ]
}

const mainPageReducer = ( state = initialState, action ) =>{
    switch(action.type){
        case CHANGE_FLAG:{
            return{
                ...state,
                flag: action.flag
            }
        }
        case SET_CURRENT_ACTIVE_LOCATIONS: {
            return { 
                ...state, 
                currentLocations: action.payload 
            }
        }
        default:{
            return state
        }
    }
}

export const changeFlag = (flag) =>{
    return{
        type: CHANGE_FLAG,
        flag: flag
    }
}

export const setCurrentActiveLocation = (currentLocations) => {
    return{
        type: SET_CURRENT_ACTIVE_LOCATIONS,
        payload: currentLocations
    }
}

export const changeDeliveryPoint = (newDeliveryPoint) => {
    return{
        type: CHANGE_DELIVERY_POINT,
        payload: newDeliveryPoint
    }
}

export default mainPageReducer