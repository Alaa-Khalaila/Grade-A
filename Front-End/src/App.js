import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AdminPage from './components/AdminPage';

const App = () => {

  return (
    <Router>
      <AdminPage/>
    </Router>
  );
};

export default App;





