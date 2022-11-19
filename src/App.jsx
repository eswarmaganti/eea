import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { HomePage, LoginPage } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
