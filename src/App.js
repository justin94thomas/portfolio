import React from 'react';
import './App.css';
import { PortfolioProvider } from './Content/PortfolioContext';
import Navigation from './Pages/Navigation';
import Introduction from './Pages/Introduction';
import About from './Pages/About';
import Experience from './Pages/Experience';
// import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
      <PortfolioProvider>
        <Navigation />
        <Introduction />
        <About />
        <Experience />
        {/* <Contact /> */}
      </PortfolioProvider>
    </div>
  );
}

export default App;
