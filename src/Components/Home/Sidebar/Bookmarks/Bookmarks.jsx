import MapContainer from "./Map/MapContainer"
import BookmarksListContainer from "./Table/BookmarksListContainer"
import s from './Bookmarks.module.scss'


const Bookmarks = () =>{
    return(<div className={s.bookmarks}>
        <BookmarksListContainer />
        <MapContainer />
    </div>)
}

export default Bookmarks