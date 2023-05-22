import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Footer from './components/footer';

import TemperatureConverter from "./components/TemperatureConverter";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
        <Header />
        <TemperatureConverter />
        <Footer />
  </div>
  
  
)

