import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadGIFPage from './pages/UploadGIFPage'; // Home page
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UploadGIFPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
