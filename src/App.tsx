import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./interfaces/ui/components/Layout";
import SignInModal from "./interfaces/ui/modals/SignInModal";
import SignUpModal from "./interfaces/ui/modals/SignUpModal";
import CustomizedPackages from "./interfaces/ui/pages/Servicess/CustomizedPackages";
import Accommodation from "./interfaces/ui/pages/Accommodation/Accommodation";
import Transport from "./interfaces/ui/pages/Transport/Transport";
import Tours from "./interfaces/ui/pages/Tours/Tours";
import Payments from "./interfaces/ui/pages/Payments/Payments";
import Nature from "./interfaces/ui/pages/Experiences/Nature/Nature";
import Culinary from "./interfaces/ui/pages/Experiences/Culinary/Culinary";
import Activities from "./interfaces/ui/pages/Experiences/Activities/Activities";
import Season from "./interfaces/ui/pages/Experiences/Season/Season";
import { ProtectedRoute } from "./interfaces/ui/modals/ProtectedRoute";
import AuthProvider from "./interfaces/auth/AuthProvider";
import Adventures from "./interfaces/ui/pages/WhyUs/Adventures";
import Landscapes from "./interfaces/ui/pages/WhyUs/Landscapes";
import Itineraries from "./interfaces/ui/pages/WhyUs/Itineraries";
import CryptoPayment from "./interfaces/ui/pages/WhyUs/CryptoPayment";
import Security from "./interfaces/ui/pages/WhyUs/Security";
import Home from "./interfaces/ui/pages/Home";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home isAuthenticated={isAuthenticated} />} />
            <Route
              path="/signin"
              element={<SignInModal onLogin={() => setIsAuthenticated(true)} />}
            ></Route>
            <Route path="/signup" element={<SignUpModal />}></Route>

            <Route element={<ProtectedRoute isAuth={isAuthenticated} />} />

            <Route path="/landscapes" element={<Landscapes />} />
            <Route path="/cryptopayment" element={<CryptoPayment />} />
            <Route path="/itinerary" element={<Itineraries />} />
            <Route path="/adventures" element={<Adventures />} />
            <Route path="/security" element={<Security />} />

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
            <Route
              path="/experiences/adventure"
              element={<Activities />}
            ></Route>
            <Route path="/experiences/cultural" element={<Culinary />}></Route>
            <Route path="/experiences/seasonal" element={<Season />}></Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
