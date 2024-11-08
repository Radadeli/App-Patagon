import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './interfaces/ui/components/Layout';
// import HomePage from './interfaces/ui/pages/Homepage'
// import ExperienceCatalog from './interfaces/ui/pages/ExperienceCatalog';
// import ExperienceDetails from './interfaces/ui/pages/ExperienceDetails';
// import UserProfile from './interfaces/ui/pages/UserProfile';

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
           <Route path='/' element={<Layout />}>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/experiences" element={<ExperienceCatalog />} />
          <Route path="/experiences/:id" element={<ExperienceDetails />} />
          <Route path="/profile" element={<UserProfile />} /> */}
          </Route>
        </Routes>
    </Router>
  );
};

export default App;
