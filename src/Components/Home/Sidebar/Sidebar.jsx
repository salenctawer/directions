import * as React from 'react';
import Default from "./Default/Default";
import Bus from "./Bus/Bus";
import Route from "./Route/Route";
import BookmarksContainer from './Bookmarks/BookmarksContainer';


const Sidebar = (props) => {


  const renderSwitch = (param) => {
    switch(param){
      case 'default':
        return <Default selectPosition={props.selectPosition} setSelectPosition={props.setSelectPosition}/>
      case 'route':
        return <Route />
      case 'bookmarks':
        return <BookmarksContainer />
      case 'bus':
        return <Bus />
    }
}

  return (
    <div>
      {renderSwitch(props.flag)}
    </div>
  )
};

export default Sidebar;
