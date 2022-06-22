import * as React from 'react';
import Default from "./Default/Default";
import Bus from "./Bus/Bus";
import Route from "./Route/Route";
import Bookmarks from './Bookmarks/Bookmarks';


const Sidebar = (props) => {


  const renderSwitch = (param) => {
    switch(param){
      case 'route':
        return <Route />
      case 'bookmarks':
        return <Bookmarks />
      case 'bus':
        return <Bus />
      case 'search':
        return <Default/>
    }
}

  return (
    <div>
      {renderSwitch(props.flag)}
    </div>
  )
};

export default Sidebar;
