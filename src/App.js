import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Cliente from './Cliente'
import Home1 from './Home1'
import Cad_Cliente from './Cad_Cliente'
import Cad_Prod from './Cad_Prod';
import Produtos from './Produtos';
import { auth, provider } from './firebase';
import Lista_Clientes from './Lista_Clientes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home1 />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/cad_cliente" element={<Cad_Cliente />} />
          <Route path="/cad_prod" element={<Cad_Prod />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path='/lista_clientes' element={<Lista_Clientes />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}
export default App;
