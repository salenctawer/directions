import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Map from './Components/Map/Map';
import SidebarContainer from './Components/Sidebar/SidebarContainer';

function App() {
  return (
    <div className="App">
      <SidebarContainer />
      <div className='App-container'>
        <HeaderContainer />
        <Map />
      </div>
    </div>
  );
}

export default App;
