import React from "react";
import Map from "./Map/Map";
import Search from "./Search/Search";
import { useState } from "react";
import s from './Default.module.scss'


const Default = () =>{
  const [selectPosition, setSelectPosition] = useState(null);
  return(<div className={s.default}>
    <Search selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
    <Map selectPosition={selectPosition} />
  </div>)
}

export default Default