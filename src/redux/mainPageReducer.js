const CHANGE_FLAG = 'CHANGE_FLAG'

let initialState ={
    flag: 'default',
}

const mainPageReducer = ( state = initialState, action ) =>{
    switch(action.type){
        case CHANGE_FLAG:{
            return{
                ...state,
                flag: action.flag
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



export default mainPageReducer