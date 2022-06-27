import * as React from 'react';
import Default from "./Default/Default";
import { Route, Routes } from 'react-router-dom';
import Bookmarks from './Bookmarks/Bookmarks';
import s from './Sidebar.module.scss'
import BusContainer from './Bus/BusContainer';

const Sidebar = (props) => {

  const renderSwitch = (param) => {
    switch(param){
      case 'route':
        return <Route />
      case 'bookmarks':
        return <Bookmarks />
      case 'bus':
        return <BusContainer />
      case 'search':
        return <Default/>
    }
}
  return (
    <div className={s.sidebar}>
        {renderSwitch(props.flag)}
    </div>
  )
};

export default Sidebar;
