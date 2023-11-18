import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';

import Example from './pages/Example';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />



        <Route path="/example" element={<Example />} />
      </Routes>
    </Router>
  );
};

export default App;
