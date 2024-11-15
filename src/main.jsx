import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Movie from './components/movie';
import FashionBlog from './components/fashion-blog';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/movie" element={<Movie />} />
        <Route path="/fashion-blog" element={<FashionBlog />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
