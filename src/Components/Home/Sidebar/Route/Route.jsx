import React from "react";
import { useState } from "react";
import Inputs from "./Inputs/Inputs";
import Map from './Map/Map'

const Route = () =>{
    const [selectFirstPosition, setSelectFirstPosition] = useState(null);
    const [selectSecondPosition, setSelectSecondPosition] = useState(null);
    return(
        <div>
            <Inputs selectFirstPosition={selectFirstPosition} setSelectFirstPosition={setSelectFirstPosition} 
            selectSecondPosition={selectSecondPosition} setSelectSecondPosition={setSelectSecondPosition}/>
            <Map selectFirstPosition={selectFirstPosition} selectSecondPosition={selectSecondPosition}/>
        </div>
    )
}

export default Route