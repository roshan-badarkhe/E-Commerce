import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Components/Home.jsx";
import Women from "./Components/Women.jsx";
import Men from "./Components/Men.jsx";
import Kids from "./Components/Kids.jsx";
import Carousel from "./Components/Carousel.jsx";
import Category from "./Components/Category.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Carousel />}>
            <Route path="/" element={<Category />} />
          </Route>

          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kids" element={<Kids />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
