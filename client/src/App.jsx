import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const CountrySelect = lazy(() => import('./components/CountrySelect'));
const Level = lazy(() => import('./components/Level'));
const Submission = lazy(() => import('./components/Submission'));
const Forum = lazy(() => import('./components/Forum'));

const App = () => {
  return (
    <Router basename='/'>
      <Suspense fallback={<div>Loading...</div>}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Routes>
            <Route path="/" element={
              <Home />
              }/>
            <Route path="/CountrySelect" element={
              <CountrySelect />
              }/>
            <Route path="/Level" element={
              <Level />
            }/>

            <Route path="/CountrySelect" element={
              <CountrySelect />
             }/>
              {/* test */}
             <Route path="/Submission" element={<Submission />} />
             <Route path="/Forum" element={<Forum />} />
          </Routes>
        </div>
      </div>
      </Suspense>
    </Router>
  );
};

export default App;