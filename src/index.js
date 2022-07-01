import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Table from './components/grid/Table';
import Instructions from './components/instructions/Instructions'
import Legend from './components/legend/Legend';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Legend/>
    <Instructions/>
    <Table/>
  </React.StrictMode>
);
