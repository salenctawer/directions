import { getFlag } from "../../../redux/mainPageSelectors"
import Sidebar from "./Sidebar"
import { connect } from "react-redux";



const mapStateToProps = (state) =>{
    return{
        flag: getFlag(state),
        url: state.bus.busURL
    }
}

const SidebarContainer = connect(mapStateToProps,{})(Sidebar)

export default SidebarContainer