import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));
const CountrySelect = lazy(() => import('./components/CountrySelect'));

const App = () => {
  return (
    <Router basename='/'>
      <Suspense fallback={<div>Loading...</div>}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Routes>
            <Route path="/" element={
              <Home />
              }/>
              <Route path="/Login" element={
              <Login />
              }/>
              <Route path="/Signup" element={
              <Signup />
              }/>
            <Route path="/CountrySelect" element={
              <CountrySelect />
              }/>
          </Routes>
        </div>
      </div>
      </Suspense>
    </Router>
  );
};

export default App;