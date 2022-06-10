
const CHANGE_FLAG = 'CHANGE_FLAG'

let initialState ={
    flag: 'default'
}

const mainPageReducer = ( state = initialState, aciton ) =>{
    switch(aciton.type){
        case CHANGE_FLAG:{

        }
        default:{
            return state
        }
    }
}

export default mainPageReducer