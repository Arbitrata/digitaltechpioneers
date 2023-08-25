import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import DtNavbar from "./components/common/DtNavbar";
import HomePage from "./components/pages/HomePage";
import AboutUsPage from "./components/pages/AboutUsPage";
import ServicesPage from "./components/pages/ServicesPage";
import ProjectPage from "./components/pages/ProjectPage";
import { DTFooter } from "./components/common/DTFooter";
import { ContactUsPage } from "./components/pages/ContactUsPage";
import ScrollToTop from "./components/events/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <DtNavbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="aboutus" element={<AboutUsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="contactus" element={<ContactUsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <DTFooter />
    </Router>
  </React.StrictMode>
);
