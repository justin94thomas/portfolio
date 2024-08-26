import React from 'react';
import './App.css';
import { SnackbarProvider } from 'notistack';
import { PortfolioProvider } from './Content/PortfolioContext';
import Navigation from './Pages/Navigation';
import Introduction from './Pages/Introduction';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Certificates from './Pages/Certificates';



function App() {
  return (
    <div className="App">
      <PortfolioProvider>
        <SnackbarProvider maxSnack={3}>
          <Navigation />
          <Introduction />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </SnackbarProvider>
      </PortfolioProvider>
    </div>
  );
}

export default App;
