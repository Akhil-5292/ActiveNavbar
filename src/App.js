import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Navbar/Pages/Home'
import Navbar from './Navbar/Navbar';
import About from './Navbar/Pages/About';
import Contact from './Navbar/Pages/Contact';
import Services from './Navbar/Pages/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
