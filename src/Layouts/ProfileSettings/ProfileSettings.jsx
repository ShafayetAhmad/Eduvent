import { Link } from "react-router-dom";


const ProfileSettings = () => {
  return (
    <div className="max-w-7xl mx-auto">
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
          Comming Soon
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "24px" }}>
          Soon you will be able to change your profile settings here.
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
    </div>
  );
};

export default ProfileSettings;
