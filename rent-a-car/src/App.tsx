import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import CarDetail from './components/carDetail/CarDetail';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Cars from './pages/cars/Cars';
import Order from './pages/order/Order';
import Profile from './pages/profile/Profile';
import Rental from './pages/rental/RentalPage';


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
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </div>
  );
}

export default App;