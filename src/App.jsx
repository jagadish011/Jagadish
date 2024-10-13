import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AlkalineWater from './components/AlkalineWater';
import PortfolioLayout from './components/PortfolioLayout';
import Kalasindu from './components/Kalasindu';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<PortfolioLayout />} />
          <Route path="/alkalineWater" element={<AlkalineWater />} />
          <Route path='/kalasindu' element={<Kalasindu />} />
        </Routes>
    </Router>
  );
};

export default App;