import Header from "./Header"
import { connect } from "react-redux";
import {changeFlag} from '../../redux/mainPageReducer'



const mapStateToProps = (state) =>{
    return{
        
    }
}

const HeaderContainer = connect(mapStateToProps,{changeFlag})(Header)

export default HeaderContainer