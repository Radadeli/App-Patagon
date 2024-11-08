import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./interfaces/ui/components/Layout";
import SignIn from "./interfaces/ui/components/Sign/SignIn";
import SignUp from "./interfaces/ui/components/Sign/SignUp";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
