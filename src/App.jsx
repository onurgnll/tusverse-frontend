import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerificationSuccess = () => {
    setIsVerified(true);
  };

  return (
    <div>
      {!isVerified ? (
        <Login onVerificationSuccess={handleVerificationSuccess} />
      ) : (
        <Register />
      )}
    </div>
  );
};

export default App;
