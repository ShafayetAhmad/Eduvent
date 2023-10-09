import { ToastContainer } from 'react-toastify';
import './App.css'
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/NavBar/Navbar'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="max-w-7xl mx-auto">
      <ToastContainer
        position="top-right absolute"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App
