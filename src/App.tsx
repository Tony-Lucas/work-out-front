import React, { useEffect, useState } from 'react';
import GlobalStyles from './globalStyles';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "./axios/axios"
import RoutesPage from './pages/RoutesPage';

function App() {

  return (
    
      <BrowserRouter>
        <GlobalStyles />
        <RoutesPage />
      </BrowserRouter>
   
  );
}

export default App;
