import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Components/Header/Form/Form';
import FormAuth from './Components/Header/Form/FormAuth/FormAuth';
import FormReg from './Components/Header/Form/FormReg/FormReg';
import HeaderContainer from './Components/Header/HeaderContainer';
import Map from './Components/Map/Map';
import SidebarContainer from './Components/Sidebar/SidebarContainer';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={
      <div className='App'>
          <SidebarContainer />
        <div className='App-container'>
          <HeaderContainer />
          <Map />
        </div>
      </div>
      }
      />
      <Route path='/reg' element={<FormReg />}/>
      <Route path='/auth' element={<FormAuth />}/>
    </Routes>
    </div>
  );
}

export default App;
