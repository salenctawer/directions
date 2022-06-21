 // *** NPM ***
 import { connect } from 'react-redux'

 // *** OTHER *** 
 import Map from './Map'

let mapStateToProps = ( state ) =>{
    return{
        currentLocations: state.bookMarks.currentLocations,
    }
}

const MapContainer = connect(mapStateToProps, {})(Map)

export default MapContainer