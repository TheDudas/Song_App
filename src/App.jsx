import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './components/HomePage';  // imports all the pages of the website and Bootstrap.
import SongsPage from './components/SongsPage';
import AboutPage from './components/AboutPage';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

// the App function for routing paths
// const basename = 'basename';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
