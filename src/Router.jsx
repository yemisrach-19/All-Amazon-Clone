import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import SignUp from './Pages/Auth/SignUp';
import Payments from './Pages/Payment/Payments';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<SignUp/>} />
        <Route path="/Payments" element={<Payments/>} />
        <Route path="/Orders" element={<Orders/>} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default Routing