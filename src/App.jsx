import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AlkalineWater from './components/AlkalineWater';
import PortfolioLayout from './components/PortfolioLayout';
import Kalasindu from './components/Kalasindu';
import Edmentor from './components/Edmentor';
import Dpanda from './components/Dpanda';
import Sahay from './components/Sahay';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<PortfolioLayout />} />
          <Route path="/alkalineWater" element={<AlkalineWater />} />
          <Route path='/kalasindu' element={<Kalasindu />} />
          <Route path='/edmentor' element={<Edmentor />} />
          <Route path='/dpanda' element={<Dpanda />} />
          <Route path='/sahay' element={<Sahay />} />
        </Routes>
    </Router>
  );
};

export default App;