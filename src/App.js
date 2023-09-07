import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import CheckOut from './pages/CheckOut';


export default function App({products}) {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/checkout" element={<CheckOut/>}/>
    </Routes>
  );
}



