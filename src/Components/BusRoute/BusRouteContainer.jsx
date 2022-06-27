import { connect } from 'react-redux'
import BusRoute from './BusRoute'

let mapStateToProps = ( state ) =>{
   return{
        item: state.bus.currentBusRoute
   }
}

const BusRouteContainer = connect(mapStateToProps, {})(BusRoute)

export default BusRouteContainer