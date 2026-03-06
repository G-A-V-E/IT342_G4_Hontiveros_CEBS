import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const isAuthenticated = () => !!localStorage.getItem('token');

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;