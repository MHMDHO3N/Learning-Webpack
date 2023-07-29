import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test1 from "./Test1";
import Test2 from "./Test2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
