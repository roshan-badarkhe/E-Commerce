import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Women1 from "./Components/Women1.jsx";
import Men from "./Components/Men.jsx";
import Kids from "./Components/Kids.jsx";
import Carousel from "./Components/Carousel.jsx";
import Category from "./Components/Category.jsx";
import Accessories from "./Components/Accessories.jsx";
import LoginForm from "./Components/LoginForm.jsx";
import Signup from "./Components/Signup.jsx";
import userReducer from "./Redux/userReducer.jsx";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Carousel />}>
              <Route path="/" element={<Category />} />
            </Route>
            <Route path="/women" element={<Women1 />} />
            <Route path="/men" element={<Men />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
