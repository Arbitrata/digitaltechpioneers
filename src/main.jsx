import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import DtNavbar from "./components/common/DtNavbar";
import HomePage from "./components/pages/HomePage";
import AboutUsPage from "./components/pages/AboutUsPage";
import ServicesPage from "./components/pages/ServicesPage";
import BlogPage from "./components/pages/BlogPage";
import { DTFooter } from "./components/common/DTFooter";
import { ContactUsPage } from "./components/pages/ContactUsPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <DtNavbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/aboutus" element={<AboutUsPage />} />
        <Route exact path="/services" element={<ServicesPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/contactus" element={<ContactUsPage />} />
      </Routes>
      <DTFooter />
    </Router>
  </React.StrictMode>
);
