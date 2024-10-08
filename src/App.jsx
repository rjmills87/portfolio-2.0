import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
