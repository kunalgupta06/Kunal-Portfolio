
import './App.css';
import styled , {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme } from "./utils/themes";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from './components/Education';
import { BrowserRouter as Router } from "react-router-dom";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(
    38.73deg, 
    rgba(204, 0, 187, 0.15) 0%, 
    rgba(201, 32, 184, 0) 50%),
     linear-gradient(
      141.27deg,
       rgba(0, 70, 209, 0) 50%, 
       rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkTheme ? darkTheme : lightTheme}>
      <Router>
      <Navbar />
      <Body>
        <Hero />
        <wrapper>
        <Skills />
        <Experience /> 
        </wrapper>
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      </Body> 
      </Router>
    </ThemeProvider>
  );
}

export default App;
