import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/AboutUs/About';
import Headder from './component/Headder/Headder';
import Home from './component/Home/Home';
import Products from './component/Products/Products';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div>
      <Headder></Headder>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='about' element={<About />} />
      </Routes>
      <Shop></Shop>
    </div>
  );
}

export default App;
