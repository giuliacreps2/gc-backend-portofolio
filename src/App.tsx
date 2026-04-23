
import './index.css'
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail'
import Cookies from './components/Cookies'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
    <Cookies />
    </>
  )
}

export default App
