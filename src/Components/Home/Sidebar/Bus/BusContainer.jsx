import { connect } from 'react-redux'
import Bus from './Bus'

let mapStateToProps = ( state ) =>{
   return{
   }
}

const BusContainer = connect(mapStateToProps, {})(Bus)

export default BusContainer