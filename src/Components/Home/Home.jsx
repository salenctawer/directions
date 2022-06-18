import React from "react"
import Map from './Map/Map'
import Header from './Header/HeaderContainer'
import Sidebar from './Sidebar/SidebarContainer'
import s from './Home.module.scss'


const Home = () =>{
    return(<div className={s.home}>
        <Sidebar />
        <div>
            <Header />
            <Map /> 
        </div>
    </div>)
}

export default Home