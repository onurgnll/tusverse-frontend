// import React, { useState } from "react";
// import Login from "./components/Login";
// import Register from "./components/Register";

// const App = () => {
//   const [isVerified, setIsVerified] = useState(false);

//   const handleVerificationSuccess = () => {
//     setIsVerified(true);
//   };

//   return (
//     <div>
//       {!isVerified ? (
//         <Login onVerificationSuccess={handleVerificationSuccess} />
//       ) : (
//         <Register />
//       )}
//     </div>
//   );
// };

// export default App;


import React from "react";
import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/Header";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;

