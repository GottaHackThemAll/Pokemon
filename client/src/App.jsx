import React, { Suspense, useEffect, useState } from 'react'; // Added useState import
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));
const CountrySelect = lazy(() => import('./components/CountrySelect'));
const LevelSelect = lazy(() => import('./components/LevelSelect'));
const Level = lazy(() => import('./components/Level'));
const Submission = lazy(() => import('./components/Submission'));
const Forum = lazy(() => import('./components/Forum'));
const Header = lazy(() => import('./components/Header'));

const AppContent = () => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [location.pathname]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      {showHeader && <Header/>}
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
  );
};

const App = () => {
  return (
    <Router basename='/'>
      <Suspense fallback={<div>Loading...</div>}>
<<<<<<< Updated upstream
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
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
=======
        <AppContent />
>>>>>>> Stashed changes
      </Suspense>
    </Router>
  );
};

export default App;