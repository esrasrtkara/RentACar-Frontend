import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signin from './pages/Signin';
import CarDetail from './components/carDetail/CarDetail';
import Rental from './pages/rental/RentalPage'
import 'react-toastify/dist/ReactToastify.css';
import Cars from './pages/cars/Cars';

function App() {
  return (
    <div className="App">  
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/cardetail/:id' element={<CarDetail/>}/>
        <Route path='/rental/:id' element={<Rental/>}/>
        <Route path='/cars' element={<Cars/>}/>
      </Routes>
    </div>
  );
}

export default App;