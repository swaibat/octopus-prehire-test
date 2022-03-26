import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Currencies from "./currencies";
import Currency from "./currencies/Currency";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Currencies />} />
          <Route path="/currency/:country/:code" element={<Currency />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
