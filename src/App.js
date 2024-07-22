import React from 'react';
import './App.css';
import Navigation from './Pages/Navigation';
import Introduction from './Pages/Introduction';
import About from './Pages/About';
// import Experience from './Pages/Experience';
// import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Introduction />
      <About />
      {/* <Experience />
      <Contact /> */}
    </div>
  );
}

export default App;
