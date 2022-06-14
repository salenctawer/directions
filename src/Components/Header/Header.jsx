import BookmarkIcon from '@mui/icons-material/Bookmark';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import RouteIcon from '@mui/icons-material/Route';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import s from './Header.module.scss'
import { useState } from 'react';
import Form from './Form/Form';
import { Dialog } from '@mui/material';
import { useNavigate } from 'react-router-dom';


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
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)

    let redirect = useNavigate()

    const handleClose = () => {
        setOpen(false)
        redirect('/')
    }

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
            <AccountCircleIcon style={iconStyle} onClick={handleOpen}/>
        </div>
        <Dialog 
            open={open}
            onClose = {handleClose}
        >
            <Form handleClose={handleClose}/>
        </Dialog>
    </div>)
}

export default Header