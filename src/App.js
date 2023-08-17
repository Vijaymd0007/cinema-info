import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Data from './components/Data';
import Info from './components/Info';
import Main from './components/Main';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/info/:itemId" element={<Info />} />
    </Routes>
  </Router>
  );
}

export default App;

