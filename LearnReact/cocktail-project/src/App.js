import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route index path='/' element={<Home />}></Route>

        <Route path='/about' element={<About />}></Route>

        <Route path='cocktail/:id' element={<SingleCocktail />}></Route>

        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
