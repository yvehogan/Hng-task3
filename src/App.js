import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import PageWrapper from './components/wrapper/PageWrapper';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" exact element={<PageWrapper><Homepage /></PageWrapper>} />
        <Route path="/contact" exact element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
