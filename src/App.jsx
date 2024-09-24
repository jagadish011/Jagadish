import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AlkalineWater from './components/AlkalineWater';
import PortfolioLayout from './components/PortfolioLayout';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<PortfolioLayout />} />
          <Route path="/alkalineWater" element={<AlkalineWater />} />
        </Routes>
    </Router>
  );
};

export default App;