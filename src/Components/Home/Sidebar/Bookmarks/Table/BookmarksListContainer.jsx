import { connect } from 'react-redux'
import BookmarksList from './BookmarksList'
import { setCurrentActiveLocation, changeDeliveryPoint } from '../../../../../redux/bookmarksReducer'

let mapStateToProps = ( state ) =>{
   return{
       orders: state.bookMarks.orders,
       locationVariants: state.bookMarks.locationVariants,
   }
}

const BookmarksListContainer = connect(mapStateToProps, { setCurrentActiveLocation, changeDeliveryPoint })(BookmarksList)

export default BookmarksListContainer