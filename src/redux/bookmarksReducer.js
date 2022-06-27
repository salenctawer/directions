
const SET_CURRENT_ACTIVE_LOCATIONS = 'SET_CURRENT_ACTIVE_LOCATIONS'
const CHANGE_DELIVERY_POINT = 'CHANGE_DELIVERY_POINT'
const SET_LOCATION_VARIANTS = 'SET_LOCATION_VARIANTS'

let initialState ={
    orders:[
        {
            id: '1', 
            pick: {
                id: '2',
                name: 'Ленина 7',
                position: { x: 58.017096, y: 56.257345 }
            },
            deliver: {
                id: '1',
                name: 'Луначарского 34',
                position: { x: 58.0105, y: 56.2502 }
            },
            vehicle:'autobus',
            price: 300,
        },
        {
            id: '2',
            pick: {
                id: '4',
                name: 'Василия Татищева 6',
                position: { x: 57.99081, y: 56.26287 }
            },
            deliver: {
                id: '1',
                name: 'Ленина 45 (ЦУМ)',
                position: { x: 58.01155, y: 56.23725 }
            },
            vehicle:'car', 
            price: 300,
        },
        {
            id: '3', 
            pick: {
                id: '3',
                name: 'Парковый 34',
                position: { x: 57.99782, y :56.15501 }
            },
            deliver: {
                id: '7',
                name: 'Ленина 53 (Театр-Театр) ',
                position: { x: 58.0081, y: 56.2161 }
            },
            vehicle:'airplane', 
            price: 300,
        },
        {
            id: '4', 
            pick: {
                id: '5',
                name: 'Ким 107',
                position: { x: 58.01658, y: 56.28352 }
            },
            deliver: {
                id: '2',
                name: 'Монастырская 43',
                position: { x: 58.01574, y: 56.23665 }
            }, 
            vehicle:'autobus',
            price: 300,
        },
    ],
    currentLocations: {
        pick_position: {
            x: null,
            y: null
        },
        deliver_position: {
            x: null,
            y: null
        }
    },
}

const bookmarksReducer = ( state = initialState, action ) =>{
    switch(action.type){
        case SET_CURRENT_ACTIVE_LOCATIONS: {
            return { 
                ...state, 
                currentLocations: action.payload 
            }
        }
        case CHANGE_DELIVERY_POINT:{ 
            const {elementId, dataIndex, newDeliveryPoint, refreshMapMarkers} = action.payload
            let changedElement  = {}
            const neworders = state.orders.map((item) => {
                if( item.id === elementId ) {
                    changedElement = { ...item, [dataIndex]: newDeliveryPoint }
                    return changedElement
                } else {
                    return item
                }
            })
            const newCurrentLocations = {...state.currentLocations, pick_position: changedElement.pick.position, deliver_position: changedElement.deliver.position}
            return refreshMapMarkers ? { ...state, orders: neworders, currentLocations: newCurrentLocations } : { ...state, orders: neworders }
        }
        case SET_LOCATION_VARIANTS:{
            return { 
                ...state, 
                locationVariants: action.payload, 
                }
        }
        default:{
            return state
        }
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


export default bookmarksReducer