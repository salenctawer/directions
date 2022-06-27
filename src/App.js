import { Route, Routes } from 'react-router-dom';
import './App.css';
import BusRouteContainer from './Components/BusRoute/BusRouteContainer';
import FormAuth from './Components/FormAuth/FormAuth';
import FormReg from './Components/FormReg/FormReg';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/reg' element={<FormReg />}/>
      <Route path='/auth' element={<FormAuth />}/>
      <Route path='/bus-route-:id' element={<BusRouteContainer />} />
    </Routes>
    </div>
  );
}

export default App;
