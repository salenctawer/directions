import React from "react"
import Map from './Map/Map'
import Header from './Header/HeaderContainer'
import Sidebar from './Sidebar/SidebarContainer'
import s from './Home.module.scss'
import { useState } from "react"


const Home = () =>{

    const [selectPosition, setSelectPosition] = useState(null);

    return(<div className={s.home}>
        <Sidebar selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
        <div>
            <Header />
            <Map selectPosition={selectPosition}/> 
        </div>
    </div>)
}

export default Home