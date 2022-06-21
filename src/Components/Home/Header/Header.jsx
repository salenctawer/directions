import BookmarkIcon from '@mui/icons-material/Bookmark';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import RouteIcon from '@mui/icons-material/Route';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import s from './Header.module.scss'
import { useState } from 'react';
import { Dialog } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';


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


    let redirect = useNavigate()

    const onAccClick = () =>{
        redirect('/reg')
    }

    const onButtonClick = (flag) =>{
        props.changeFlag(flag)
    }
    return(<div className={s.header}>
        <div className={s.header__containerIcons}>
            <SearchIcon style={iconStyle} onClick={()=>onButtonClick('search')}/>
            <RouteIcon style={iconStyle} onClick={()=>onButtonClick('route')}/>
            <DirectionsBusIcon style={iconStyle} onClick={()=>onButtonClick('bus')}/>
            <BookmarkIcon style={iconStyleTwo} onClick={()=>onButtonClick('bookmarks')}/>
        </div>
        <div className={s.header__account}>
            <AccountCircleIcon style={iconStyle} onClick={onAccClick}/>
        </div>
    </div>)
}

export default Header