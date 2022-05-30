import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/headers/Header';
import Table from './components/grid/Table';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Table/>
  </React.StrictMode>
);
