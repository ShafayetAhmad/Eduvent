import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>This is Home. {user}</h1>
    </div>
  );
};

export default Home;
