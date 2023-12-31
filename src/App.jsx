import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/HeaderBostrap/HeaderBostrap'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className='App'>
      <Header/>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
