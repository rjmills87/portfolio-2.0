import "./App.css";
import projects from "./data/projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/:id"
            element={<ProjectPage projects={projects} />}
          />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </BrowserRouter>
    </>
  );
}
