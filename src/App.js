import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/AboutUs/About';
import Headder from './component/Headder/Headder';
import Inventory from './component/Inventory/Inventory';
import LogIn from './component/LogIn/LogIn';
import Orders from './component/OrdersPro/Orders';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Shipping from './component/Shipping/Shipping';
import Shop from './component/Shop/Shop';
import SignIn from './component/SignIn/SignIn';

function App() {
  return (
    <div>
      <Headder></Headder>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/order' element={<Orders />} />
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/shipping' element={
          <RequireAuth>
            <Shipping />
          </RequireAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
