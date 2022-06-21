
const SET_CURRENT_ACTIVE_LOCATIONS = 'SET_CURRENT_ACTIVE_LOCATIONS'
const CHANGE_DELIVERY_POINT = 'CHANGE_DELIVERY_POINT'
const SET_LOCATION_VARIANTS = 'SET_LOCATION_VARIANTS'

let initialState ={
    orders:[
        {
            id: '1', 
            pick: {
                id: '2',
                name: 'Moscow',
                position: { x: 55.7522, y: 37.6156 }
            },
            deliver: {
                id: '1',
                name: 'Perm',
                position: { x: 58.0105, y: 56.2502 }
            },
            vehicle:'autobus',
            price: 300,
        },
        {
            id: '2',
            pick: {
                id: '4',
                name: 'Saint-P',
                position: { x: 59.9386, y: 30.3141 }
            },
            deliver: {
                id: '1',
                name: 'Perm',
                position: { x: 58.0105, y: 56.2502 }
            },
            vehicle:'car', 
            price: 300,
        },
        {
            id: '3', 
            pick: {
                id: '3',
                name: 'Samara',
                position: { x: 53.2022, y :50.1596 }
            },
            deliver: {
                id: '7',
                name: 'Sochi',
                position: { x: 43.5992, y: 39.7257 }
            },
            vehicle:'airplane', 
            price: 300,
        },
        {
            id: '4', 
            pick: {
                id: '5',
                name: 'Kazan',
                position: { x: 55.7887, y: 49.1221 }
            },
            deliver: {
                id: '2',
                name: 'Moscow',
                position: { x: 55.7522, y: 37.6156 }
            }, 
            vehicle:'autobus',
            price: 300,
        },
        {
            id: '5', 
            pick: {
                id: '1',
                name: 'Perm',
                position: { x: 58.0105, y: 56.2502 }
            },
            deliver: {
                id: '6',
                name: 'Omsk',
                position: { x: 54.9924, y: 73.3686 }
            },
            vehicle:'autobus', 
            price: 300,
        },
        {
            id: '6', 
            pick: {
                id: '4',
                name: 'Saint-P',
                position: { x: 59.9386, y: 30.3141 }
            }, 
            deliver: {
                id: '1',
                name: 'Perm',
                position: { x: 58.0105, y: 56.2502 }
            },
            vehicle:'car', 
            price: 300,
        },
    ],
    locationVariants:[
        {
            id: '1',
            name: 'Perm',
            position: { x: 58.0105, y: 56.2502 }
        },
        {
            id: '2',
            name: 'Moscow',
            position: { x: 55.7522, y: 37.6156 }
        },
        {
            id: '3',
            name: 'Samara',
            position: { x: 53.2022, y :50.1596 }
        },
        {
            id: '4',
            name: 'Saint-P',
            position: { x: 59.9386, y: 30.3141 }
        },
        {
            id: '5',
            name: 'Kazan',
            position: { x: 55.7887, y: 49.1221 }
        },
        {
            id: '6',
            name: 'Omsk',
            position: { x: 54.9924, y: 73.3686 }
        },
        {
            id: '7',
            name: 'Sochi',
            position: { x: 43.5992, y: 39.7257 }
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