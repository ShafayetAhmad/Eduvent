import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      }
    });

    return () => unsubscribe(); 
  }, [user]); 

  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl">Profile Page</h1>

      <div className="mt-5 ">
        {userData ? (
          <>
            {user.photoURL ? (
              <div className="flex justify-center my-8 ">
                <img
                  src={userData.photoURL}
                  alt="Profile"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              </div>
            ) : (
              <p className="text-error py-4">
                Please Sign in with Google to see your Photo and Name Here
              </p>
            )}
            <h3>Name: {userData.displayName}</h3>
            <p>Email: {userData.email}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
