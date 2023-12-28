import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header'

import HeaderBostrap from './components/HeaderBostrap/HeaderBostrap'

function App() {
  return (
    <Router>
      <div>
        <HeaderBostrap/>
      </div>
    </Router>
  );
}

export default App;
