import "./index.css";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Cookies from "./components/Cookies";
import CVPage from "./components/CVPage";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter basename="/gc-backend-portofolio/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </HashRouter>
      <Cookies />
    </>
  );
}

export default App;
