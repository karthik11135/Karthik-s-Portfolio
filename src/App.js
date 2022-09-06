import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/My Skills/Skills";
import NotFound from "./components/Nofound/NotFound";
import Project from "./components/Projects/Project";
import FullPage from "./pages/FullPage";
import ProjectsList from "./components/Projects/ProjectsList";
import ProjectItem from "./components/Projects/ProjectItem";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<FullPage />}></Route>
          <Route path="/hero" element={<Hero />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Project />}>
            {/* <Route index element={} ></Route> */}
          </Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
