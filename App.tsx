
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LevelList from './pages/LevelList';
import GradeDetail from './pages/GradeDetail';
import TDExample from './pages/TDExample';
import Methods from './pages/Methods';
import Parents from './pages/Parents';
import About from './pages/About';
import Contact from './pages/Contact';
import { SchoolLevel } from './types';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/college" element={<LevelList category={SchoolLevel.COLLEGE} />} />
          <Route path="/lycee" element={<LevelList category={SchoolLevel.LYCEE} />} />
          <Route path="/grade/:id" element={<GradeDetail />} />
          <Route path="/exemple-td" element={<TDExample />} />
          <Route path="/methodes" element={<Methods />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Default fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
