import { connect } from 'react-redux'
import Bus from './Bus'
import {getItemsThunk, changeBusUrl} from '../../../../redux/busReducer'

let mapStateToProps = ( state ) =>{
   return{
        itemsBus: state.bus.items
   }
}

const BusContainer = connect(mapStateToProps, {getItemsThunk, changeBusUrl})(Bus)

export default BusContainer