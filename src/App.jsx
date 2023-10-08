import './App.css'
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/NavBar/Navbar'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  )
}

export default App
