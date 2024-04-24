
import './App.css'; 
import "react-toastify/dist/ReactToastify.css"

import { Routes, Route , Navigate }  from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <div className='App'>
      <ToastContainer/>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element ={<Navigate to ="/not-found"/>} />
        </Routes>
    
    </div>
  );
}

export default App;
