import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Apartment from './pages/Apartment/Apartment'; 
import About from './pages/About/About'; 
import Error from './pages/Error/Error'; 
import Layout from './components/Layout/Layout'; 

function App() {
  return (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/apartment/:id"element={<Apartment />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Route>
  </Routes>
  );
}

export default App;