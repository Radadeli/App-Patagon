import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./interfaces/ui/components/Layout";
import SignIn from "./interfaces/ui/components/Sign/SignIn";
import SignUp from "./interfaces/ui/components/Sign/SignUp";
import HomePage from "./interfaces/ui/pages/HomePage";
import CustomizedPackages from "./interfaces/ui/pages/Servicess/CustomizedPackages";
import Accommodation from "./interfaces/ui/pages/Accommodation/Accommodation";
import Transport from "./interfaces/ui/pages/Transport/Transport";
import Tours from "./interfaces/ui/pages/Tours/Tours";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/services/packages"
            element={<CustomizedPackages />}
          ></Route>
          <Route
            path="/services/accommodation"
            element={<Accommodation />}
          ></Route>
          <Route path="/services/tours" element={<Tours />}></Route>
          <Route path="/services/transport" element={<Transport />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
