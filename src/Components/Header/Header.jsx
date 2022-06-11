import BookmarkIcon from '@mui/icons-material/Bookmark';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import RouteIcon from '@mui/icons-material/Route';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import s from './Header.module.scss'

const iconStyle = {
    marginRight: '80px',
    width: '40px',
    height: '40px',
}
const iconStyleTwo = {
    width: '40px',
    height: '40px'
}

const Header = (props) =>{
    const onButtonClick = (flag) =>{
        props.changeFlag(flag)
    }
    return(<div className={s.header}>
        <div className={s.header__containerIcons}>
            <RouteIcon style={iconStyle} onClick={()=>onButtonClick('route')}/>
            <DirectionsBusIcon style={iconStyle} onClick={()=>onButtonClick('bus')}/>
            <BookmarkIcon style={iconStyleTwo} onClick={()=>onButtonClick('bookmarks')}/>
        </div>
        <div className={s.header__account}>
            <AccountCircleIcon style={iconStyle}/>
        </div>
    </div>)
}

export default Header