import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";
import VideoRepositoryPage from "./pages/VideoRepository/VideoRepositoryPage";
import VideoDetails from "./pages/VideoRepository/VideoDetails";
import SaveVid from "./pages/SaveVid/SaveVid";

const App = () => {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/repository" element={<VideoRepositoryPage />} />
          <Route path="/repository/:id" element={<VideoDetails />} />
          <Route path="/save" element={<SaveVid />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
