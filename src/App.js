import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact  from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';


function App() {
  return (
  <div className='text-center text-white flex flex-col  items-center h-auto'>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/resume' element={<Resume/>}></Route>
      <Route path='/projects' element={<Project/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    <Footer/>
  </div>
  )
  
}

export default App;
