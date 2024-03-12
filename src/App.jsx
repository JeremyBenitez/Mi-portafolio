import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import { Navbar } from './components/Navbar';
import  { Home } from './pages/home/Home';
import  { About } from './pages/home/about/About';
import { Portfolio } from './pages/home/portafolio/Portfolio';
import { Contact } from './pages/contact/Contact';
import {Themes} from './components/Themes';
// import { Contact2 } from './pages/contact/Contact2';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Themes/>
    <Routes>
      <Route index element={<Home />}/>
      <Route path='About' element={<About/>}/>
      <Route path='Portfolio' element={<Portfolio/>}/>
      <Route path='Contact' element={<Contact/>}/>
      {/* <Route path='Contact' element={<Contact2/>}/> */}

    </Routes>
    </BrowserRouter> 
  )
}

export default App;
