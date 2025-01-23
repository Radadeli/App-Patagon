import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./interfaces/ui/components/Layout";
import SignInModal from "./interfaces/ui/modals/SignInModal";
import SignUpModal from "./interfaces/ui/modals/SignUpModal";
import HomePage from "./interfaces/ui/pages/HomePage";
import CustomizedPackages from "./interfaces/ui/pages/Servicess/CustomizedPackages";
import Accommodation from "./interfaces/ui/pages/Accommodation/Accommodation";
import Transport from "./interfaces/ui/pages/Transport/Transport";
import Tours from "./interfaces/ui/pages/Tours/Tours";
import Payments from "./interfaces/ui/pages/Payments/Payments";
import Nature from "./interfaces/ui/pages/Experiences/Nature/Nature";
import Culinary from "./interfaces/ui/pages/Experiences/Culinary/Culinary";
import Activities from "./interfaces/ui/pages/Experiences/Activities/Activities";
import Season from "./interfaces/ui/pages/Experiences/Season/Season";

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
          <Route path="/services/payment" element={<Payments />}></Route>
          <Route path="/experiences/nature" element={<Nature />}></Route>
          <Route path="/experiences/adventure" element={<Activities />}></Route>
          <Route path="/experiences/cultural" element={<Culinary />}></Route>
          <Route path="/experiences/seasonal" element={<Season />}></Route>

          <Route path="/signin" element={<SignInModal />}></Route>
          <Route path="/signup" element={<SignUpModal />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
