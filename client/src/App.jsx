import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';

const Header = lazy(() => import('./components/header'));
const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));
const CountrySelect = lazy(() => import('./components/CountrySelect'));
const LevelSelect = lazy(() => import('./components/LevelSelect'));
const Level = lazy(() => import('./components/Level'));
const Submission = lazy(() => import('./components/Submission'));
const Forum = lazy(() => import('./components/Forum'));

const App = () => {
  return (
    <Router basename='/'>
      <Suspense fallback={<div>Loading...</div>}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '90vh'}}>
        <Header/>
        <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/Login" element={ <Login /> }/>
            <Route path="/Signup" element={ <Signup /> }/>
            <Route path="/CountrySelect" element={ <CountrySelect /> }/>
            <Route path="/LevelSelect" element={ <LevelSelect /> }/>
            <Route path="/Level" element={ <Level /> }/>
            <Route path="/Submission" element={ <Submission /> } />
            <Route path="/Forum" element={ <Forum /> } />
          </Routes>
        </div>
      </div>
      </Suspense>
    </Router>
  );
};

export default App;