import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/AboutUs/About';
import Headder from './component/Headder/Headder';
import Inventory from './component/Inventory/Inventory';
import Orders from './component/OrdersPro/Orders';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div>
      <Headder></Headder>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='order' element={<Orders />} />
        <Route path='inventory' element={<Inventory />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
