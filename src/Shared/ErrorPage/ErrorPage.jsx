import Navbar from "../NavBar/Navbar";

const ErrorPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="text-center mt-20 text-4xl"> Opps. You are on the wrong page.</div>
    </div>
  );
};

export default ErrorPage;
