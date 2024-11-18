import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Movie from './components/movie';
import FashionBlog from './components/fashion-blog';
import NewsPage from './components/news';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/movie" element={<Movie />} />
        <Route path="/fashion-blog" element={<FashionBlog />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
