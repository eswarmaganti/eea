import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { HomePage, LoginPage } from "./pages";
import { LayoutContainer } from "./components/layout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutContainer />}>
          <Route path="" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
