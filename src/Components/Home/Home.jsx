import React from "react"
import Header from './Header/HeaderContainer'
import Sidebar from './Sidebar/SidebarContainer'
import s from './Home.module.scss'
import { useState } from "react"


const Home = () =>{


    return(<div className={s.home}>
        <Sidebar/>
        <div className={s.headerContainer}>
            <Header /> 
        </div>
    </div>)
}

export default Home