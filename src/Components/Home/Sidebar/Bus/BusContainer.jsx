import { connect } from 'react-redux'
import Bus from './Bus'
import {getItemsThunk} from '../../../../redux/busReducer'

let mapStateToProps = ( state ) =>{
   return{
        itemsBus: state.bus.items
   }
}

const BusContainer = connect(mapStateToProps, {getItemsThunk})(Bus)

export default BusContainer