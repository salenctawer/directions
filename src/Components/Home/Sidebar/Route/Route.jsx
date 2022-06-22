import React from "react";
import { useState } from "react";
import Inputs from "./Inputs/Inputs";
import Map from './Map/Map'
import s from './Route.module.scss'

const Route = () =>{
    const [selectFirstPosition, setSelectFirstPosition] = useState({lat: 58.0105, lon: 56.2502});
    const [selectSecondPosition, setSelectSecondPosition] = useState({lat: 58.0105, lon: 56.2502});
    console.log(`Первая${selectFirstPosition}, Вторая${selectSecondPosition}`)
    return(
        <div className={s.route}>
            <Inputs selectFirstPosition={selectFirstPosition} setSelectFirstPosition={setSelectFirstPosition} 
            selectSecondPosition={selectSecondPosition} setSelectSecondPosition={setSelectSecondPosition}/>
            <Map selectFirstPosition={selectFirstPosition} selectSecondPosition={selectSecondPosition}/>
        </div>
    )
}

export default Route