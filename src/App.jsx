import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Archive from '@pages/Archive';

const App = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
