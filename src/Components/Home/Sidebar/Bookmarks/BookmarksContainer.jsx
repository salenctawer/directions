 import { connect } from 'react-redux'
 import Bookmarks from './Bookmarks'
 import { setCurrentActiveLocation, changeDeliveryPoint } from '../../../../redux/mainPageReducer'

let mapStateToProps = ( state ) =>{
    return{
        orders: state.mainPage.orders,
        locationVariants: state.mainPage.locationVariants,
    }
}

const BookmarksContainer = connect(mapStateToProps, { setCurrentActiveLocation, changeDeliveryPoint })(Bookmarks)

export default BookmarksContainer