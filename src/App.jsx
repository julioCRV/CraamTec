import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header'

import Pru from './components/HeaderBostrap/prueba'

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Pru/>
      </div>
    </Router>
  );
}

export default App;
