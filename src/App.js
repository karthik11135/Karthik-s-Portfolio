import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/Nofound/NotFound";
import FullPage from "./pages/FullPage";
import SkillsPage from "./pages/SkillsPage";
import HeroPage from './pages/HeroPage';
import ProjectPage from './pages/ProjectsPage';
import Footer from "./components/Footer/Footer";
import ProjectItem from "./components/Projects/ProjectItem";
import ProjectCard from './components/Projects/ProjectCard';
import ProjectsList from "./components/Projects/ProjectsList";
import Contact from "./components/Contact.js/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HeroPage />}></Route>
          <Route path="/hero" element={<HeroPage />}></Route>
          <Route path="/skills" element={<SkillsPage />}></Route>
          <Route path="/projects" element={<ProjectPage />}>
            <Route index element={<ProjectsList />}></Route>
            <Route path="/projects/:projectId" element={<ProjectItem />}></Route>
          </Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
     {/* <Footer /> */}
    </div>
  );
}

export default App;
