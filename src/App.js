import './App.css';
import Header from './Components/Header/Header';
import Map from './Components/Map/Map';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='App-container'>
        <Header />
        <Map />
      </div>
    </div>
  );
}

export default App;
