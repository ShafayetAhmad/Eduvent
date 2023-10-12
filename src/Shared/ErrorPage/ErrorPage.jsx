import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

const ErrorPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem", marginBottom: "16px" }}>
          404 Not Found
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "24px" }}>
          Oops! The page you are looking for might be in another universe.
        </p>
        <Link
          to="/"
          style={{
            fontSize: "1.2rem",
            color: "#007BFF",
            textDecoration: "none",
          }}
        >
          Go to Homepage
        </Link>
      </div>
      <Footer></Footer>
    </div>
    
  );
};

export default ErrorPage;
