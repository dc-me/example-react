import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./lib/config";
import "./index.css";
import Movie from "./components/movie";
import FashionBlog from "./components/fashion-blog";
import NewsPage from "./components/news";
import LoginPage from "./components/user/LoginPage";
import ChatPage from "./components/chat";
import RegisterPage from "./components/user/RegisterPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/movie" element={<Movie />} />
        <Route path="/fashion-blog" element={<FashionBlog />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/users/login" element={<LoginPage />} />
        <Route path="/users/chat" element={<ChatPage />} />
        <Route path="/users/signup" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
