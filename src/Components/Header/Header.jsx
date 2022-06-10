import BookmarkIcon from '@mui/icons-material/Bookmark';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import RouteIcon from '@mui/icons-material/Route';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import s from './Header.module.scss'

const iconStyle = {
    marginRight: '80px',
    width: '40px',
    height: '40px'
}
const iconStyleTwo = {
    width: '40px',
    height: '40px'
}

const Header = (props) =>{
    const onRouteClick = () =>{
        props.changeFlag('route')
    }
    const onBookmarkClick = () =>{
        props.changeFlag('bookmarks')
    }
    const onBusClick = () =>{
        props.changeFlag('bus')
    }
    return(<div className={s.header}>
        <div className={s.header__containerIcons}>
            <RouteIcon style={iconStyle} onClick={onRouteClick}/>
            <DirectionsBusIcon style={iconStyle} onClick={onBookmarkClick}/>
            <BookmarkIcon style={iconStyleTwo} onClick={onBusClick}/>
        </div>
        <div className={s.header__account}>
            <AccountCircleIcon style={iconStyle}/>
        </div>
    </div>)
}

export default Header