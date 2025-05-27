import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}