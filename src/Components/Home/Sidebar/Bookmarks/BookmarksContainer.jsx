 import { connect } from 'react-redux'
 import Bookmarks from './Bookmarks'
 import { setCurrentActiveLocation, changeDeliveryPoint, fetchOrders } from '../../redux/wayTrackerReducer/actions'
 import { fetchLocationVariants } from '../../redux/constsReducer/actions'

let mapStateToProps = ( state ) =>{
    return{
        orders: state.mainPage.orders,
        locationVariants: state.mainPage.locationVariants,
    }
}

const BookmarksContainer = connect(mapStateToProps, { setCurrentActiveLocation, changeDeliveryPoint, fetchOrders, fetchLocationVariants })(Bookmarks)

export default BookmarksContainer